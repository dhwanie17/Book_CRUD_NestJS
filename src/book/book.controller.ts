import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
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
  getBookById(@Param('id', ParseIntPipe) bookId: any): any {
    console.log(bookId, typeof bookId);
    // return this.bookService.findBookByIdService(bookId);
  }
}
