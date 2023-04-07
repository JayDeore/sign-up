import { Injectable } from '@nestjs/common';
import { Signup } from './signup.model';

@Injectable()
export class SignupService {
  private signup: Signup[] = [];

  getAllSignup(): Signup[] {
    return this.signup;
  }

  getSignupByEmail(email: string): Signup {
    return this.signup.find((signup) => signup.email === email);
  }

  addSignup(name: string, email: string, state: string, city: string): Signup {
    const signup: Signup = {
      name,
      email,
      state,
      city,
    };
    this.signup.push(signup);
    return signup;
  }
}
