import { IsNumber, IsString } from "class-validator"


export class CreateNeworderDto {


    
    @IsString()
    userId  : string 
    @IsNumber()
    total  :number 
   
  @IsString()
   status:string     
  @IsString()
  cartid:string //objectid



    
}
