import { User } from './users.interface';
export declare class UsersService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
}
