import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUsersQueryDto } from './dto/list-users.query.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    // TODO: Add error handling
    // TODO: Return appropriate error responses
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async listUsers(@Query() queryDto: ListUsersQueryDto): Promise<User[]> {
    // TODO: Add error handling
    // TODO: Return appropriate error responses
    return this.usersService.listUsers(queryDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    // TODO: Add error handling
    // TODO: Return appropriate error responses (404 if not found)
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // TODO: Add error handling
    // TODO: Return appropriate error responses (404 if not found)
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id') id: string): Promise<void> {
    // TODO: Add error handling
    // TODO: Return appropriate error responses (404 if not found)
    return this.usersService.softDeleteUser(id);
  }
}

