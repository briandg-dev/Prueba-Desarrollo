import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class SectorCreateDto {
    @Transform(({ value }) => value.trim())
    @IsString()
    descripcion: string;
}

