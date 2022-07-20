import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.id == 1) return value;
    else throw new BadRequestException('Validation failed');
    return value.id == 1;
  }
}
