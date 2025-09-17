import {BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import { UsersService } from './users.services';
import type { Users } from '@prisma/client';
import { createUserDto } from './dto/create-users';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers() {
       return this.usersService.getAllUsers();
    }
    
    @Post()
    async createUser(@Body() createUserDto: createUserDto) {
        const userFound = await this.usersService.getUserByEmail(createUserDto.email);
        if (userFound) throw new BadRequestException('El email ya existe');

        const userFound2 = await this.usersService.getUserByDocument(createUserDto.tipoDocumento,createUserDto.numeroDocumento);
        if (userFound2) throw new BadRequestException('El documento ya existe');
        return this.usersService.create(createUserDto);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const userFound = await this.usersService.getUserById(Number(id));
        if (!userFound) throw new NotFoundException('No existe usuario'); 
        return userFound;
    }

     @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        try {
            return await this.usersService.deleteUser(Number(id)); //necesita await porqe es asincrono 
        } catch (error) {
            throw new NotFoundException("El usuario no existe");
        }
        
    }

    @Put(':id')
    async updateUser(@Param('id') id: string,@Body() data: Users) {
        return this.usersService.updateUser(Number(id),data);
    }
}