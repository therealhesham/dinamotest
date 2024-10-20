import { IsString ,IsOptional, MinLength, IsNumber} from "class-validator"


export class CreateOrederitemDto {

    @IsString()
    name :string


    
    @IsOptional()
    cartId:string 
    // id          String   @id @default(auto()) @map("_id") @db.ObjectId
    // name        String
   @IsString()
    productId  : string  

@IsNumber()
cost : number
    



}
