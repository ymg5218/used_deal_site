import { Body, Controller, Post, Get, Delete, Param, NotFoundException, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('/user')
export class UserController {
    constructor( private readonly userService: UserService){}
    
    @Get('findAll')
    async getAll(): Promise<User[]>{
        return await this.userService.findAll();
    }

    @Post('findOne')
    async getUser(@Body() _id: string){
        return await this.userService.findOne(_id);
    }
    
    @Post('create')
    async createUser(@Body() user: User): Promise<User>{
        return await this.userService.createUser(user);
    }
    
    @Post('update')
    async updateUser(@Body() _id: string){
        return await this.userService.updateUser(_id);
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
