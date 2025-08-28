import { Controller, Get, Post, Body, Patch, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  async createEmpresa(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  async getAllEmpresa() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  async getEmpresaById(@Param('id') id: string) {
    const empresaFound = await this.empresaService.findById(Number(id));
        if (!empresaFound) throw new NotFoundException('No existe la Empresa'); 

    return this.empresaService.findById(+id);
  }

  @Put(':id')
  async updateEmpresa(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    try {
      return await this.empresaService.update(Number(id), updateEmpresaDto);
    }
    catch (error) {
      throw new NotFoundException("La empresa a editar no existe");
    }
  }

  @Delete(':id')
  async deleteEmpresa(@Param('id') id: string) {
    try {
        return await this.empresaService.remove(+id);
    } catch (error) {
        throw new NotFoundException("La empresa no existe");
    }

  }
}
