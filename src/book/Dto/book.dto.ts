import { IsInt, IsString } from 'class-validator';

export class BookDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;
  author: string;
  published: number;
}
