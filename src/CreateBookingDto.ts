import { IsInt, IsNotEmpty, IsNumber, IsString, IsUrl, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateBookingDto {

    @IsString()
    @IsNotEmpty({message: 'Destination cannot be empty'})
    destination: string;

    @IsString()
    @MinLength(30, {message: 'Description must be longer than 30 characters'})
    description: string;

    @IsString()
    @IsUrl()
    imageURL: string;

    @IsInt()
    price: number;

    @IsNumber()
    @Min(0)
    @Max(5)
    discount: number;
    



}