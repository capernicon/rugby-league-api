import { AuthenticationService } from './authentication.service';
import { LoginUserDTO } from './authentication.interface';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(LoginUserDTO: LoginUserDTO): Promise<any>;
}
