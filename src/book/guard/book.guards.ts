import { Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class BookGurad implements CanActivate {
  canActivate(): boolean {
    console.log('This is book Guard');
    return true;
  }
}
