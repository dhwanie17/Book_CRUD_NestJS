import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class BookGurad implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('This is book Guard');
    return true;
  }
}
