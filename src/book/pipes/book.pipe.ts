import { BadRequestException, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Book } from '../Dto/book.dto';

export class BookPipe implements PipeTransform {
  async transform(value: any): Promise<any> {
    //class transformer obj convert class
    const bookClass = plainToInstance(Book, value);
    //class validator
    const errors = await validate(bookClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation failed' + JSON.stringify(errors),
      );
    }

    console.log(value, typeof value);
    return value;
  }
}
