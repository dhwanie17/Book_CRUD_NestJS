import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BookGurad implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('This is book Guard');
    return false;
  }
}
