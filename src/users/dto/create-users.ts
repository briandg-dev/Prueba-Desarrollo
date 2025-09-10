import { Transform } from "class-transformer";
import { IsDecimal, IsEmail, IsNumber, IsString, Length, Matches, MinLength } from "class-validator";
import { Decimal } from "generated/prisma/runtime/library";


export class createUserDto {
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    nombres: string;

    @IsNumber()
    tipoDocumento: number;

    @IsString()
    @Transform(({ value }) => String(value).replace(/\D/g, "")) // ?? elimina todo lo que no sea dígito
    @Length(7, 11, { message: "El documento debe tener entre 7 y 11 dígitos" })
    @Matches(/^\d+$/, { message: "El documento debe contener solo dígitos" })    // DNI argentino suele estar entre 7 y 11 dígitos
    numeroDocumento: string;
    
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;

    @IsNumber()
    rolUser: number;
}