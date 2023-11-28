import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.0.2:27017/Test'),
    TestModule,
    UserModule,
  ],
})
export class AppModule {}
