import { IsNumber, IsString } from "class-validator"

export class CreateOrderDto {

    @IsString()
    userId  : string 
    @IsNumber()
    total  :number 
   
  @IsString()
   status:String     
  


}
