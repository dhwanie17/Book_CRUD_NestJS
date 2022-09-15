import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class BookInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('This is the interceptor');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = 'name';
    return next.handle().pipe(
      map(() => {
        return 'from interceptor';
      }),
    );
  }
}
