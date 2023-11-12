// src/users/users.service.ts

import {Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import {CreateUserDto} from "../create-user.dto";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto);
        await user.hashPassword();
        return this.userRepository.save(user);
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { username } });
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async validate(payload: any) {
        // Tutaj załóżmy, że w payloadzie mamy `username`:
        const user = await this.usersService.findByUsername(payload.username);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user; // W req.user znajdzie się teraz zwrócony obiekt użytkownika bez hasła
    }

}
