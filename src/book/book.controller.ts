import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookCustomExceptionFilter } from './filter/book.exception.filter';
import { BookGurad } from './guard/book.guards';
import { BookInterceptor } from './interceptors/book.interceptors';
import { BookService } from './book.service';
import { Book } from './Dto/book.dto';
import { BookPipe } from './pipes/book.pipe';
import { BookException } from './exceptions/book.exception';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  @UseGuards(new BookGurad())
  // @UseInterceptors(BookInterceptor)
  @UsePipes(BookPipe)
  getAllBooks(): any {
    return this.bookService.findAllBooks();
  }

  @Put('/update/:id')
  updateBook(@Param('id') id: string, @Body() book: Book): string {
    return this.bookService.updateBookService(id, book);
  }

  @Delete('/delete/:id')
  deleteBooks(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
  @Post('/add')
  addBook(@Body(new BookPipe()) book: Book): string {
    return this.bookService.addBookService(book);
  }
  @Get('/findById/:id')
  getBookById(@Param('id') bookId: any): any {
    console.log(bookId, typeof bookId);
    return this.bookService.findBookByIdService(bookId);
  }
  @Get('/exception')
  // @UseFilters(BookException)
  @UseFilters(BookCustomExceptionFilter)
  getException(): any {
    throw new ForbiddenException();
  }
}
