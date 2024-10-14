import { IsEmail, IsString } from "class-validator"

export class CreateVendorDto {

    @IsString()
    name:string

    @IsEmail()
    email:string
    
    


}
