import { Injectable, Type } from '@nestjs/common';
import {
  DataSource,
  InsertResult,
  Repository,
  UpdateResult,
} from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Datasheets } from '../entities/datasheets';

type Constructor<T> = new (...args: any[]) => T;

export interface IBaseServiceHost<T> {
  readonly repository: Repository<T>;
  readonly dataSource: DataSource;
  findAll: () => Promise<T[]>;
  delete: (id: number) => Promise<void>;
  createMany: (data: T[]) => Promise<void>;
  findByDatasheet: (
    datasheet: Datasheets,
    relations?: object,
    select?: object,
  ) => Promise<T[]>;
  create: (data: T) => Promise<InsertResult>;
  updateOne: (
    id: string | number,
    data: any,
  ) => Promise<UpdateResult>;
  // relationExists: (entity: T) => Promise<boolean>;
}

export const BaseService = <T>(
  resourceType: Constructor<T>,
): Type<IBaseServiceHost<T>> => {
  @Injectable()
  class BaseServiceHost<T> {
    @InjectRepository(resourceType)
    readonly repository: Repository<T>;
    @InjectDataSource()
    readonly dataSource: DataSource;

    async findAll(): Promise<T[]> {
      return this.repository.find();
    }

    async updateOne(
      id: string | number,
      data: any,
    ): Promise<UpdateResult> {
      return this.repository.update(id, data);
    }

    async findByDatasheet(
      datasheet: Datasheets,
      relations?: object,
      select?: object,
    ): Promise<T[]> {
      let searchObj = {
        where: { datasheet },
      };

      if (relations) {
        searchObj = Object.assign(searchObj, {
          relations,
        });
      }

      if (select) {
        searchObj = Object.assign(searchObj, {
          select,
        });
      }

      // @ts-expect-error: Not a datasheet derivative
      return await this.repository.find(searchObj);
    }

    async delete(id: number): Promise<void> {
      await this.repository.delete(id);
    }

    async create(entity: T): Promise<InsertResult> {
      return this.repository.insert(
        entity as QueryDeepPartialEntity<T>,
      );
    }

    async createMany(data: T[]): Promise<void> {
      const queryRunner = this.dataSource.createQueryRunner();

      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        console.log(`Beginning map for ${resourceType}`);
        data.map(async (val) => {
          await this.repository
            .createQueryBuilder()
            .insert()
            .into(resourceType)
            .values(val as QueryDeepPartialEntity<any>)
            .orIgnore()
            .execute();
        });
        console.log(`Finished map for ${resourceType}`);

        await queryRunner.commitTransaction();
        console.log(`Commited ${resourceType}`);
      } catch (err) {
        console.log(err.detail);
        // avoid rollback for missing/damaged entries
        if (!err.detail.includes('is not present in table')) {
          await queryRunner.rollbackTransaction();
        }
      } finally {
        await queryRunner.release();
        console.log(`Released queryRunner`);
      }
    }

    // async relationExists(entity: T): Promise<boolean> {
    //   const metadata = this.repository.metadata.relations
    //     .filter((relation) => relation.isManyToOne)
    //     .map((relation) => ({
    //       name: relation.propertyName,
    //       metadata: relation.inverseEntityMetadata,
    //     }));
    //
    //   if (metadata) {
    //     for (const relation of metadata) {
    //       const relationName = relation.name;
    //       const relatedEntityMetadata = relation.metadata;
    //       const relatedEntityRepo = this.dataSource.getRepository(
    //         relatedEntityMetadata.target,
    //       );
    //
    //       const relatedId = (entity as any)[relationName];
    //
    //       if (!relatedId) {
    //         return true;
    //       }
    //
    //       if (relatedId) {
    //         const relatedEntity = await relatedEntityRepo.findOne({
    //           where: { id: relatedId },
    //         });
    //
    //         return !!relatedEntity;
    //       }
    //     }
    //   }
    //
    //   return true;
    // }
  }

  return BaseServiceHost;
};
