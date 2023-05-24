import { UsersService } from '../users/users.service';
export declare class AuthenticationService {
    private usersService;
    constructor(usersService: UsersService);
    logIn(username: string, pw: string): Promise<any>;
}
