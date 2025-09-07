import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class RolDto {
    
    @Transform(({ value }) => value.trim())
    @IsString()
    nombre: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    descripcion: string;
}

