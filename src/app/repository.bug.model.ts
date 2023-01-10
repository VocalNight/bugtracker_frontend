import { Bug } from "./bug.model";
import { BugDataSource } from "./datasource.bug.model";

export class BugModel {

  private dataSource: BugDataSource;
  private bugs: Bug[];
  private locator = (b: Bug, id: number | any) => b.id === id;

  constructor() {
    this.dataSource = new BugDataSource();
    this.bugs = new Array<Bug>();
    this.dataSource.getData().forEach(b => this.bugs.push(b))
  }

  getBugs(): Bug[] {
    return this.bugs;
  }

  getBug(id: number): Bug | undefined {
    return this.bugs.find(b => this.locator(b, id))
  }

  saveBug(bug: Bug) {
    if (bug.id == 0 || bug.id == null) {
      bug.id = this.generateID();
      this.bugs.push(bug);
    } else {
      let index = this.bugs.findIndex(b => this.locator(b, bug.id));
      this.bugs.splice(index, 1, bug)
    }
  }

  deleteBug(id: number) {
    let index = this.bugs.findIndex(b => this.locator(b, id));
    if (index > -1) {
      this.bugs.splice(index, 1)
    }
  }

  private generateID(): number {
  let candidate = 100;
  while (this.getBug(candidate) != null) {
    candidate++;
  }
    return candidate;
  }

}
