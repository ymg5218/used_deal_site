import { Body, Controller, Post, Get, Delete, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('/user')
export class UserController {
    constructor( private readonly userService: UserService){}
    
    @Get('findAll')
    async getUser(): Promise<User[]>{
        return await this.userService.findAll();
    }
    
    @Post('create')
    async createUser(@Body() user: User): Promise<User>{
        return await this.userService.createUser(user);
    }
    
    @Delete('delete/:_id')
    async deleteUser(@Param('_id') _id: string) {
        const deletedUser = await this.userService.deleteUser(_id);
        if (!deletedUser) {
            throw new NotFoundException('User not found');
          }
        return deletedUser;
        //return this.userService.deleteUser(_id);
    }
}
