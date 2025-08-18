import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { UsersService } from './users.services';
import type { Users } from '@prisma/client';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers() {
       return this.usersService.getAllUsers();
    }
    
    @Post()
    async createUser(@Body() data: Users) {
        return this.usersService.createUser(data);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }
}