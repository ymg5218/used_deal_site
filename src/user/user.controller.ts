import { 
    Body, 
    Controller, 
    Post, 
    Get, 
    Delete, 
    Param, 
    NotFoundException,
 } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { UserDTO } from './dto/user.dto';
import { UserLoginDTO } from './dto/user.logindto';
import { AuthService } from 'src/auth/auth.service';

@Controller('/user')
export class UserController {
    constructor( 
        private readonly userService: UserService,
        private readonly authService: AuthService
        ){}
    
    @Get('findAll')
    async getAll(): Promise<User[]>{
        return await this.userService.findAll();
    }

    @Post('findOne')
    async getUser(@Body() _id: string){
        return await this.userService.findOne(_id);
    }
    
    @Post('login')
    async loginUser(@Body() user: UserLoginDTO){
        return await this.authService.jwtLogin(user);
    }

    @Post('create')
    async createUser(@Body() user: UserDTO){
        return await this.userService.createUser(user);
    }
    
    @Post('update')
    async updateUser(@Body() user : any){
        return await this.userService.updateUser(user);
    }

    @Delete('delete/:_id')
    async deleteUser(@Param('_id') _id: string) {
        const deletedUser = await this.userService.deleteUser(_id);
        if (!deletedUser) {
            throw new NotFoundException('User not found');
        }
        return deletedUser;
    }
}
