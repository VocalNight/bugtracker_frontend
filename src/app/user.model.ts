import { Bug } from "./bug.model";

export class User {

  constructor(public id: number,
    public name: string,
    public email: string,
    public password: string,
    public assignedBugs: number[],
    public isAdmin: boolean ) { }

}
