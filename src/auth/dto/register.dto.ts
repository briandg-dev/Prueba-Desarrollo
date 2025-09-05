import { Transform } from "class-transformer";
import { IsDecimal, IsEmail, IsNumber, IsString, Length, MinLength } from "class-validator";
import { Decimal } from "generated/prisma/runtime/library";

export class RegisterDto {
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    nombres: string;

    @IsNumber()
    tipoDocumento: number;

    @IsString()
    @Length(7, 11) // DNI argentino suele estar entre 7 y 11 dígitos
    numeroDocumento: string;
    
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
}