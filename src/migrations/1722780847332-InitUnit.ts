import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitUnit1722780847332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Unit`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Unit`);
  }
}
