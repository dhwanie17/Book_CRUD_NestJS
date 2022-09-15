import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('BOOK');

  use(request: Request, response: Response, next: NextFunction): void {
    // const { ip, method, originalUrl } = request;
    // const userAgent = request.get('user-agent') || '';

    // response.on('finish', () => {
    //   const { statusCode } = response;
    //   const contentLength = response.get('content-length');

    //   this.logger.log(
    //     `${method}${originalUrl}  ${statusCode}  ${contentLength} - ${userAgent}  ${ip}`,
    //   );
    // });

    const protocol = request.protocol; //http https
    const host = request.get('host'); //localhost
    const url = request.originalUrl;
    const method = request.method;
    const date = new Date().toDateString();
    this.logger.log(`${protocol}://${host}${url}  ${method}  ${date}`);
    next();
  }
}
