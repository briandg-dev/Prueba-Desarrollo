import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface requestWithUser extends Request{user: {email: string; rolUser: number}}
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}
   
    @Post('register')
    register(@Body() registerDto: RegisterDto){
            console.log(registerDto);
        return this.authService.register(registerDto); 
    }

    @Post('login')
    login(@Body() loginDto: LoginDto){
        console.log(loginDto);
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @Auth(Role.ADMIN)
    profile(
        @Req() req: requestWithUser,
    ){
        return this.authService.profile({
            email: req.user.email,
            rolUser: req.user.rolUser
        });
    }
}
