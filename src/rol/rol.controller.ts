import {BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseGuards} from '@nestjs/common';
import { RolService } from './rol.services';
import { RolDto } from './dto/rol.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
@Controller('rol')
export class RolController {
    constructor(private readonly rolService: RolService) {}

    @Get()
    @Auth(Role.ADMIN)
    async getAllRol() {
       return this.rolService.getAllRol();
    }
    
    @Post()
    @Auth(Role.ADMIN)
    async createRol(@Body() data: RolDto) {
        return this.rolService.createRol(data);
    }

    @Get(':id')
    async getRolById(@Param('id') id: string) {
        const rolFound = await this.rolService.getRolById(Number(id));
        if (!rolFound) throw new NotFoundException('No existe usuario'); 
        return rolFound;
    }

     @Delete(':id')
    async deleteRol(@Param('id') id: string) {
        try {
            return await this.rolService.deleteRol(Number(id)); //necesita await porqe es asincrono 
        } catch (error) {
            throw new NotFoundException("El rol no existe");
        }
        
    }

    @Put(':id')
    async updateRol(@Param('id') id: string,@Body() data: RolDto) {
        return this.rolService.updateRol(Number(id),data);
    }
}