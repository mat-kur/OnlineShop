// src/users/users.controller.ts

import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, UseGuards} from '@nestjs/common';
import { CreateUserDto } from '../users/create-user.dto';
import { UsersService } from './services/users.service';
import { User } from '../users/entities/user.entity';
import {LocalAuthGuard} from "../auth/local-auth.guard";
import { AuthService } from "../auth/services/auth.service"

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Endpoint do rejestracji nowego użytkownika
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    // Endpoint do pobierania użytkownika po nazwie użytkownika
    @UseGuards(LocalAuthGuard) // Użyj LocalAuthGuard dla lokalnego logowania
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Req() req): Promise<any> {
        return this.AuthService.login(req.user); // req.user jest ustawiany przez Passport
    }
}
