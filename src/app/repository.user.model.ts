import { Bug } from "./bug.model";
import { BugDataSource } from "./datasource.bug.model";
import { UserDataSource } from "./datasource.user.model";
import { User } from "./user.model";

export class UserModel {
  private dataSource: UserDataSource;
  private bugDataSource: BugDataSource;
  private bugs: Bug[];
  private users: User[];
  private locator = (u: User, id: number | any) => u.id == id;

  constructor() {
    this.dataSource = new UserDataSource();
    this.bugDataSource = new BugDataSource();
    this.bugs = new Array<Bug>();
    this.users = new Array<User>();
    this.bugDataSource.getData().forEach(b => this.bugs.push(b));
    this.dataSource.getData().forEach(u => this.users.push(u));
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => this.locator(u, id));
  }

  getAssignedBugs(id: number): Bug[] {
    let assignedBugs = new Array<Bug>;

    this.getUser(id)?.assignedBugs.forEach(b =>
      this.bugs.forEach(bug => {
        if (bug.id == b) {
          assignedBugs.push(bug)
        }
      }
    ));
      console.log(assignedBugs);
    return assignedBugs;
  }

  saveUser(user: User) {
    if (user.id == 0 || user.id == null) {
      user.id = this.generateID();
      this.users.push(user);
    } else {
      let index = this.users.findIndex(u => this.locator(u, user.id));
      this.users.splice(index, 1, user);
    }
  }

  deleteUser(id: number) {
    let index = this.users.findIndex(u => this.locator(u, id));
    if (index > -1) {
      this.users.splice(index, 1)
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getUser(candidate) != null) {
      candidate++;
    }
      return candidate;
  }
}
