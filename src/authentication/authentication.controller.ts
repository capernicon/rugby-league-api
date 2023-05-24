import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginUserDTO } from './authentication.interface';

@Controller('authentication')
export class AuthenticationController {

    constructor(private readonly authenticationService: AuthenticationService) {}

    @Post('login')
    login(@Body() LoginUserDTO: LoginUserDTO) {
        return this.authenticationService.logIn('sdasd', 'asd');
    }

}

