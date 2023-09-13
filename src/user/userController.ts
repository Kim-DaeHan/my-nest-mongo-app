import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findOneById(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }
  @Get(':name')
  findOneByName(@Param('name') name: string): Promise<User> {
    return this.userService.findOneByName(name);
  }

  @Post()
  create(@Body() createTestDto: any): Promise<User> {
    return this.userService.create(createTestDto);
  }
}
