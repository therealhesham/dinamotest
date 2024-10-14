import { IsNumber, IsOptional, IsString ,MinLength} from "class-validator"


export class CreateProductDto {
    @IsString()
    name : string
    
    @MinLength(12)
    @IsString()
    description: string

    @IsOptional()
    @IsString()
    vendorId: string

    @IsNumber()
    price : number
     
    @IsNumber()
    stock : number


}
