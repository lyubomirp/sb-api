import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Abilities } from '../entities/abilities';
import { AbilitiesModule } from './abilities.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/Configuration';
import { CronModule } from './cron.module';
import { Datasheets } from '../entities/datasheets';
import { DatasheetsLeader } from '../entities/datasheetsLeader';
import { DatasheetsAbilities } from '../entities/datasheetsAbilities';
import { DatasheetsEnhancements } from '../entities/datasheetsEnhancements';
import { DatasheetsDetachmentAbilities } from '../entities/datasheetsDetachmentAbilities';
import { DatasheetsStratagems } from '../entities/datasheetsStratagems';
import { DatasheetsModelsCost } from '../entities/datasheetsModelsCost';
import { DatasheetsUnitComposition } from '../entities/datasheetsUnitComposition';
import { DatasheetsKeywords } from '../entities/datasheetsKeywords';
import { DatasheetsModels } from '../entities/datasheetsModels';
import { DatasheetsOptions } from '../entities/datasheetsOptions';
import { DatasheetsWargear } from '../entities/datasheetsWargear';
import { Factions } from '../entities/factions';
import { Source } from '../entities/source';
import { Stratagems } from '../entities/stratagems';
import { Enhancements } from '../entities/enhancements';
import { DetachmentAbilities } from '../entities/detachmentAbilities';
import { BulkModule } from './bulk.module';
import { LastUpdate } from '../entities/lastUpdate';
import { FactionsModule } from './factions.module';
import { DatasheetsModule } from './datasheets.module';
import { DatasheetsModelsModule } from './datasheetsModels.module';
import { DatasheetsUnitCompositionModule } from './datasheetsUnitComposition.module';
import { DatasheetsStratagemsModule } from './datasheetsStratagems.module';
import { DatasheetsWargearModule } from './datasheetsWargear.module';
import { DatasheetsAbilitiesModule } from './datasheetsAbilities.module';
import { DatasheetsOptionsModule } from './datasheetsOptions.module';
import { DatasheetsLeaderModule } from './datasheetsLeader.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: configService.get<TypeOrmModuleOptions>(
          'database.type',
          {
            // We need to infer or else useFactory blows a gasket
            infer: true,
          },
        ),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [
          Factions,
          Source,
          Stratagems,
          Enhancements,
          DetachmentAbilities,
          Abilities,
          Datasheets,
          DatasheetsLeader,
          DatasheetsAbilities,
          DatasheetsEnhancements,
          DatasheetsDetachmentAbilities,
          DatasheetsStratagems,
          DatasheetsModelsCost,
          DatasheetsUnitComposition,
          DatasheetsKeywords,
          DatasheetsModels,
          DatasheetsOptions,
          DatasheetsWargear,
          LastUpdate,
        ],
        migrations: ['./migrations/*.ts'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    AbilitiesModule,
    FactionsModule,
    DatasheetsModule,
    DatasheetsModelsModule,
    DatasheetsUnitCompositionModule,
    DatasheetsStratagemsModule,
    DatasheetsWargearModule,
    DatasheetsAbilitiesModule,
    DatasheetsOptionsModule,
    DatasheetsLeaderModule,
    BulkModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
