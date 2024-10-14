import { Matches,IsEmail,isString,IsStrongPassword, Min, IsString } from "class-validator";

export class CreateUserDto {

@IsEmail()
email : string;

@IsStrongPassword()
password:string

@IsStrongPassword()
repeatpassword:string

@Min(8)
address:string

@IsString()
city:string



}
