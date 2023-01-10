import { BugService } from './../bug-service.service';
import { BugModel } from './../repository.bug.model';
import { Bug } from './../bug.model';
import { UserModel } from './../repository.user.model';

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BugsDataSource } from '../bugsDatasource';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {

  userModel = new UserModel();
  @Input() bugs!: BugsDataSource;
  model = new Bug();


  constructor(private bugsService: BugService) { }

  ngOnInit(): void {

  }

  // Change to the user that is creating the case
  //Later when we add user functionality
  reporters = this.userModel.getUsers().map(user => user.name);

  versions = ['0.1', '0.2', '0.3', '0.4', '0.5'];
  statuses = ['open', 'closed'];
  severities = ['Low', 'Normal', 'Critical', 'Urgent'];



  onSubmit(form: NgForm) {
    this.bugsService.addBug(this.model)
      .subscribe(bug => this.bugs.loadBugs());
      this.model = new Bug(undefined,undefined,'','','','','','','','');
  }


}
