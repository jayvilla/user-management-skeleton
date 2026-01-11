import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUsersQueryDto } from './dto/list-users.query.dto';

@Injectable()
export class UsersService {
  // TODO: Replace with actual in-memory array storage
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // TODO: Implement user creation logic
    // TODO: Generate unique ID
    // TODO: Set createdAt timestamp
    // TODO: Add user to in-memory array
    // TODO: Return created user
    throw new Error('Not implemented');
  }

  async listUsers(queryDto: ListUsersQueryDto): Promise<User[]> {
    // TODO: Implement user listing logic
    // TODO: Apply soft delete filter (exclude users with deletedAt)
    // TODO: Apply search filter (q parameter) if provided
    // TODO: Apply pagination (page, pageSize) if provided
    // TODO: Return filtered and paginated users
    throw new Error('Not implemented');
  }

  async getUserById(id: string): Promise<User> {
    // TODO: Implement get user by ID logic
    // TODO: Exclude soft-deleted users
    // TODO: Throw NotFoundException if user not found
    throw new Error('Not implemented');
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: Implement user update logic
    // TODO: Find user by ID
    // TODO: Exclude soft-deleted users
    // TODO: Update user fields
    // TODO: Return updated user
    // TODO: Throw NotFoundException if user not found
    throw new Error('Not implemented');
  }

  async softDeleteUser(id: string): Promise<void> {
    // TODO: Implement soft delete logic
    // TODO: Find user by ID
    // TODO: Set deletedAt timestamp instead of removing from array
    // TODO: Throw NotFoundException if user not found
    throw new Error('Not implemented');
  }
}

