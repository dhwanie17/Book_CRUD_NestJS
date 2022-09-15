import {
  Body,
  Controller,
  Delete,
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
import { BookCustomExceptionFilter } from './book.exception.filter';
import { BookGurad } from './book.guards';
import { BookInterceptor } from './book.interceptors';
import { BookService } from './book.service';
import { Book } from './Dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  @UseGuards(new BookGurad())
  // @UseFilters(BookCustomExceptionFilter)
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
  addBook(@Body(new ValidationPipe()) book: Book): string {
    return this.bookService.addBookService(book);
  }
  @Get('/findById/:id')
  getBookById(@Param('id', ParseIntPipe) bookId: any): any {
    console.log(bookId, typeof bookId);
    return this.bookService.findBookByIdService(bookId);
  }
}
