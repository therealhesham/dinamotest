import { IsString ,IsOptional, MinLength, IsNumber} from "class-validator"


export class CreateOrederitemDto {

    @IsString()
    name :string

    @MinLength(5)
    cartId:string 
    // id          String   @id @default(auto()) @map("_id") @db.ObjectId
    // name        String
   @IsString()
    productId  : string  

@IsNumber()
cost : number
    



}
