import { User, UserInput } from '../graphql';

export class UsersService {
  private users: User[] = [];

  create(input: UserInput): Promise<User> {
    console.log('Creating user:', input);
    return new Promise((resolve) => {
      const newUser = {
        id: (Math.random() * 1000).toString(),
        ...input,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.users.push(newUser);
      resolve(newUser);
    });
  }

  findAll(): Promise<User[]> {
    return new Promise((resolve) => resolve(this.users));
  }

  findOne(id: string): Promise<User | null> {
    return new Promise((resolve) =>
      resolve(this.users.find((user) => user.id === id) || null),
    );
  }

  update(id: string, input: UserInput): Promise<User | null> {
    return new Promise((resolve) => {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex === -1) return resolve(null);

      const updatedUser = {
        ...this.users[userIndex],
        ...input,
        updatedAt: new Date().toISOString(),
      };
      this.users[userIndex] = updatedUser;
      return resolve(updatedUser);
    });
  }

  remove(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex === -1) return resolve(false);

      this.users.splice(userIndex, 1);
      return resolve(true);
    });
  }
}
