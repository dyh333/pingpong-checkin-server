import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckinController } from './checkin/checkin.controller';

import { CheckInEntity } from './checkin/dto/checkin.entity';

const ENTITIES = [
  CheckInEntity,
]

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '122.112.247.228',
      port: 3306,
      username: 'root',
      password: 'Sipsd123!@',
      database: 'ppci',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),

    TypeOrmModule.forFeature([...ENTITIES]),
  ],
  controllers: [AppController, CheckinController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
