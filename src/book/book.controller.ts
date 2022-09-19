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
import { BookDto } from './Dto/book.dto';
import { BookPipe } from './pipes/book.pipe';
import { BookException } from './exceptions/book.exception';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  @UseGuards(new BookGurad())
  // @UseInterceptors(BookInterceptor)
  @UsePipes(BookPipe)
  getAllBooks(): Observable<BookDto[]> {
    return this.bookService.findAllBooks();
  }

  @Put('/update/:id')
  updateBook(
    @Param('id') id: number,
    @Body() book: BookDto,
  ): Observable<UpdateResult> {
    return this.bookService.updateBookService(id, book);
  }

  @Delete('/delete/:id')
  deleteBooks(@Param('id') id: number): Observable<DeleteResult> {
    return this.bookService.deleteBookService(id);
  }
  @Post('/add')
  addBook(@Body(new BookPipe()) book: BookDto): Observable<BookDto> {
    return this.bookService.addBookService(book);
  }
  @Get('/findById/:id')
  getBookById(@Param('id') id: number): Observable<BookDto> {
    return this.bookService.findBookByIdService(id);
  }
  @Get('/exception')
  // @UseFilters(BookException)
  @UseFilters(BookCustomExceptionFilter)
  getException(): any {
    throw new ForbiddenException();
  }
}
