import { Injectable } from '@nestjs/common';
import { BookDto } from './Dto/book.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Book } from './Entity/book.entity';
import { from, Observable } from 'rxjs';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  // add book
  addBookService(bookDto: BookDto): Observable<BookDto> {
    return from(this.booksRepository.save(bookDto));
  }

  // find all books
  findAllBooks(): Observable<BookDto[]> {
    return from(this.booksRepository.find());
  }

  // find book by id
  findBookByIdService(id: number): Observable<BookDto> {
    return from(this.booksRepository.findOne({ where: { id: id } }));
  }

  // update book
  updateBookService(id: number, book: BookDto): Observable<UpdateResult> {
    return from(this.booksRepository.update(id, book));
  }

  // findOne(id: string): Promise<Book> {
  //   return this.booksRepository.findOneBy({ id });
  // }

  //delete book
  deleteBookService(id: number): Observable<DeleteResult> {
    return from(this.booksRepository.delete(id));
  }
}

// @Injectable()
// export class BookService {
//   public books: Book[] = [];

//   //add book
//   addBookService(book: Book): string {
//     book.id = uuidv4();
//     this.books.push(book);

//     return 'Book has been successfully added';
//   }

//   //update book
//   updateBookService(id: string, book: Book): string {
//     const index = this.books.findIndex((currentBook) => {
//       return currentBook.id == book.id;
//     });
//     this.books[index] = book;
//     return 'Book has been successfully updated';
//   }
//   //delete book
//   deleteBookService(bookId: string): string {
//     this.books = this.books.filter((book) => {
//       return book.id != bookId;
//     });
//     return 'Book has been successfully deleted';
//   }
//   //find all books
//   findAllBooks(): Book[] {
//     return this.books;
//   }

//   //find book by id
//   findBookByIdService(bookId: string): Book[] {
//     return (this.books = this.books.filter((book) => {
//       return book.id == bookId;
//     }));
//   }
// }
