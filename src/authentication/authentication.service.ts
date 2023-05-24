import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthenticationService {

  constructor(private usersService: UsersService) {}

  async logIn(username: string, pw: string): Promise<any> {

    const user = await this.usersService.findOne(username);

    if (user?.password !== pw) {
      throw new UnauthorizedException();
    }
    
    const { password, ...result } = user;

    // TODO: Generate a JWT and return it here
    // instead of the user object

    return result;
  }
}