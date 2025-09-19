import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RolService } from 'src/rol/rol.services';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService, private readonly rolService: RolService){}
    async register({nombres, email, password, numeroDocumento, tipoDocumento}: RegisterDto) {
        const vEmail = await this.usersService.getUserByEmail(email);
        if (vEmail) {
            throw new BadRequestException('El email que intenta registrar ya existe');
        }
        const user = await this.usersService.getUserByDocument(tipoDocumento, numeroDocumento);
        if (user) {
            throw new BadRequestException('El documento que intenta registrar ya existe');
        }

        return await this.usersService.create({ 
            nombres,
            email,
            password: await bcryptjs.hash(password, 10),
            numeroDocumento,
            tipoDocumento,
            rolUser: 1
            });
    }
    async login({email, password}: LoginDto) {
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException('El email no coincide');
        }

        const isPasswordValid = bcryptjs.compareSync(password, user.password!);
        if(!isPasswordValid) {
            throw new UnauthorizedException('La contrasen?a no coincide');
        }
        const rol = await this.rolService.getRolById(user.rolUser ?? 0);

        const payload = {email: user.email, rolUser: rol?.nombre};
        const token = await this.jwtService.signAsync(payload);
        //const descripcion
        return {
            token,
            email
        }
    }

    async profile({email,rolUser}: {email: string; rolUser: number}) {
       /* if (rolUser !== 1) {
            throw new UnauthorizedException('El rol no es correcto');
        }*/
       
        /*
        const rolDescripcion = this.rolService.getRolById(rolUser);*/

        return await this.usersService.getUserByEmail(email);
        /*
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException('El email no coincide');
        }
        return user; */
    }
}
