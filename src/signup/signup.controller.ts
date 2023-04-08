/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { Signup } from './signup.model';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Get()
  getAllSignup(): Signup[] {
    return this.signupService.getAllSignup();
  }

  @Get('/:email')
  getSignupByEmail(@Param('email') email: string): Signup {
    return this.signupService.getSignupByEmail(email);
  }

  @Post()
  addSignup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('state') state: string,
    @Body('city') city: string,
  ): Signup {
    return this.signupService.addSignup(name, email, state, city);
  }

  @Delete('/:email')
  deleteSignup(@Param('email') email: string) {
    this.signupService.deleteSignup(email);
    return 'Email is deleted';
  }
}
