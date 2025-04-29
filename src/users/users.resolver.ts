import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserInput } from '../graphql';
import { UserModel } from './dto/users.model';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserModel])
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => UserModel)
  async getUser(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  @Mutation(() => UserModel)
  registerUser(@Args('input') input: UserInput): Promise<User> {
    return this.usersService.create(input);
  }

  @Mutation(() => UserModel)
  updateUser(
    @Args('id') id: string,
    @Args('input') input: UserInput,
  ): Promise<User | null> {
    return this.usersService.update(id, input);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: string): Promise<boolean> {
    return this.usersService.remove(id);
  }
}
