
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorCreateDto} from './dto/create-sector';
@Controller('sector')
export class SectorController {
    constructor(private readonly sectorService: SectorService) {}

        @Get()
        async getAllUsers() {
           return this.sectorService.getAllSector();
        }
        
        @Post()
        async createUser(@Body() createSectorDto: SectorCreateDto) {
            const userFound = await this.sectorService.getSectorByDesc(createSectorDto.descripcion);
            if (userFound) throw new BadRequestException('El sector ya es existente');
    
            return this.sectorService.createSector(createSectorDto);
        }
    
        @Get(':id')
        async getSectorById(@Param('id') id: string) {
            const userFound = await this.sectorService.getSectorById(Number(id));
            if (!userFound) throw new NotFoundException('El Sector no existe'); 
            return userFound;
        }
    
         @Delete(':id')
        async deleteSector(@Param('id') id: string) {
            try {
                return await this.sectorService.deleteSector(Number(id)); //necesita await porqe es asincrono 
            } catch (error) {
                throw new NotFoundException("El Sector no existe");
            }
            
        }
    
        @Put(':id')
        async updateSector(@Param('id') id: string,@Body() data: SectorCreateDto) {
            return this.sectorService.updateSector(Number(id),data);
        }
}