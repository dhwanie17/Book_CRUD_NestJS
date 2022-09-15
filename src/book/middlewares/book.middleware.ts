import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class BookMiddleWare implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    const protocol = req.protocol; //http https
    const host = req.get('host'); //localhost
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toDateString();
    console.log(protocol + '://' + host + url + '  ' + method + '  ' + date);
    next();
  }
}
