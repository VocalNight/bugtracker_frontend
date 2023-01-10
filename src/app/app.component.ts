import { BugsDataSource } from './bugsDatasource';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bug } from './bug.model';
import { BugModel } from './repository.bug.model';
import { UserModel } from './repository.user.model';
import { BugService } from './bug-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bugtracker_froentend';
  user: UserModel = new UserModel();
  bug: BugModel = new BugModel()
  bugList = this.bug.getBugs();
  bugs: Bug[] = []
  columnsToDisplay = ['select', 'number', 'bugTitle', 'description', 'reporter', 'assignee', 'version', 'status', 'severity'];
  datasource = new MatTableDataSource(this.bugs)
  datasourceObs!: BugsDataSource;
  selection = new SelectionModel<Bug>(false, []);
  selectedBug: Bug | undefined;

  constructor(private bugsService: BugService) { }

  ngOnInit(): void {
    this.datasourceObs = new BugsDataSource(this.bugsService);
    this.datasourceObs.loadBugs();
    this.getBugs();
  }

  public applyFilter = (filterValue: string) => {
    //get rid of whitespace and lowercases
    filterValue = filterValue.trim().toLowerCase();
    this.bugs.filter(bug => bug === filterValue);
  }

  selectedTest = (bug: Bug) => {
    if (this.selectedBug === bug) {
      this.selectedBug = undefined
    } else {
      this.selectedBug = bug;
    }
    console.log(this.selectedBug);
  }

  getBugs(): void {
    this.bugsService.getBugs()
      .subscribe(bugs => {
        this.bugs = bugs
      });
  }
}
