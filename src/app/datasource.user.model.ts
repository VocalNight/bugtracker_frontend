import { User } from "./user.model";

export class UserDataSource {
  private data: User[];

  constructor() {
    this.data = new Array<User>(
      new User(1, "John", "john@testing.com", "something", [2], true),
      new User(2, "Joan", "joan@testing.com", "something", [1, 3], false)
    )
  }

  getData(): User[] {
    return this.data;
  }
}
