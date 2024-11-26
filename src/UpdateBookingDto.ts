import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Max, Min, MinLength } from "class-validator";

export class UpdateBookingDto {

    @IsOptional()
    @IsInt()
    id?: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'Destination cannot be empty'})
    destination?: string;

    @IsOptional()
    @IsString()
    @MinLength(30, {message: 'Description must be longer than 30 characters'})
    description?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    imageURL?: string;

    @IsOptional()
    @IsInt()
    price?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(5)
    discount?: number;
    
}