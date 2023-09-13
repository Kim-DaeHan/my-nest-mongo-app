import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    // 모든 데이터 조회
    return this.userModel.find().exec();
  }

  async findOneById(id: string): Promise<User> {
    // ID를 기반으로 데이터 조회
    return this.userModel.findById(id).exec();
  }

  async findOneByName(name: string): Promise<User> {
    // 이름을 기반으로 데이터 조회
    return this.userModel.findOne({ name }).exec();
  }

  async create(createTestDto: any): Promise<User> {
    const createdTest = new this.userModel(createTestDto);
    return createdTest.save();
  }
}
