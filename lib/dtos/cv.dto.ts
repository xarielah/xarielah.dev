import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CvDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  public email: string;
}
