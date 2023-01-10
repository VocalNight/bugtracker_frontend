export class Bug {

  constructor(public id?: number,
    public number?: number,
    public title?: string,
    public description?: string,
    public reporter?: string,
    public assignee?: string,
    public version?: string,
    public status?: string, //enum?
    public severity?: string, //enum?
    public classification?: string,
    //public time: Time, //check this one
    //Tags?
    //Set a customizable reminder as long as the bug is not closed
    //release Milestone
    //Reproducible
    ) { }
}
