import { Bug } from "./bug.model";

export class BugDataSource {
  private data: Bug[];

  constructor() {
    this.data = new Array<Bug>(
      new Bug(1, 1, "Error Test", "Testing out", "John", "Joan", "0.1", "open", "minimal", "testing"),
      new Bug(2, 2, "Error Test2", "Testing out", "Joan", "John", "0.1", "open", "minimal", "testing"),
      new Bug(3, 3, "Error Test3", "Testing out", "John", "Joan", "0.1", "open", "critical", "testing")
    )
  }

  getData(): Bug[] {
    return this.data;
  }
}
