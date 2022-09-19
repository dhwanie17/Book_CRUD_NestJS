import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { BookModule } from './book/book.module';
import { typeOrmConfig } from './book/config/config.typeorm';
import { Book } from './book/Entity/book.entity';

@Module({
  imports: [BookModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
