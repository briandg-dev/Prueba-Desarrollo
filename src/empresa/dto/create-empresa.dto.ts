import { IsString } from "class-validator";

export class CreateEmpresaDto {
  @IsString()
  descripcion: string;
}
