import { HttpException, HttpStatus } from '@nestjs/common';

export class BookException extends HttpException {
  constructor() {
    super('This is my custom Book exception', HttpStatus.BAD_REQUEST);
  }
}
