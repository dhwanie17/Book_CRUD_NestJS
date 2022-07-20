import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookMiddleWare } from './book.middleware';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes('book');
  }
}
