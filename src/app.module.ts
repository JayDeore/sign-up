import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';

@Module({
  imports: [SignupModule],
  controllers: [AppController, SignupController],
  providers: [AppService, SignupService],
})
export class AppModule {}
