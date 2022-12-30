import { IsEmail, MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class ContactDto {
  // Contact Model Data Transfer Object
  @IsNotEmpty()
  @MaxLength(16)
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  public email: string;

  @IsNotEmpty()
  @MaxLength(128)
  @IsString()
  public content: string;
}
