import { Logger } from './Logger';
import { User } from '../shared/UserTypes';

interface IUserRepo {
  addUser(user: User): boolean;
  getUser(id: string): User | null;
}

export class InMemoryUserRepo implements IUserRepo {
  users: User[] = [];

  getUser(id: string): User | null {
    Logger.log(`retrieving user ${id}`);
    for (const user of this.users) {
      if (user.Id === id) {
        return user;
      }
    }
    Logger.log(`could not find user ${id}`);
    return null;
  }

  addUser(newUser: User): boolean {
    Logger.log(`new user: ${JSON.stringify(newUser)}`);
    for (const user of this.users) {
      if (user.Id === newUser.Id) {
        return false;
      }
    }
    Logger.log(`adding user ${newUser.Id}`);
    this.users.push(newUser);
    return true;
  }
}
