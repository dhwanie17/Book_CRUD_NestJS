import { IsInt, IsString } from 'class-validator';

export class Book {
  @IsInt()
  id: string;

  @IsString()
  title: string;
  author: string;
  published: number;
}
