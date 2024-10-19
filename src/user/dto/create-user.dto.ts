import { Matches,IsEmail,isString,IsStrongPassword, Min, IsString, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {

@IsEmail()
email : string;


@MinLength(8)
password:string

@MinLength(8)
repeatpassword:string

@MinLength(8)
address:string

@IsOptional()
@IsString()
city:string



}
