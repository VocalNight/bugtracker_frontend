import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bug } from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bugs = [
      { id: 1, number: 1, title: "Error Test", description: "Testing out", reporter: "John", assignee: "Joan", version: "0.1", status: "Open", severity: "Low", classfication: "sdhjds"},
      { id: 2, number: 2, title: "Error Test", description: "Testing out", reporter: "John", assignee: "Joan", version: "0.1", status: "Open", severity: "Low", classfication: "sdhjds"},
      { id: 3, number: 3, title: "Error Test", description: "Testing out", reporter: "John", assignee: "Joan", version: "0.1", status: "Open", severity: "Low", classfication: "sdhjds"},
      { id: 4, number: 4, title: "Error Test", description: "Testing out", reporter: "John", assignee: "Joan", version: "0.1", status: "Open", severity: "Low", classfication: "sdhjds"},
    ]
    return {bugs};
  }
  constructor() { }
/*
  genId(bugs: Bug[]): number {
    return bugs.length > 0 ? Math.max(...bugs.map(bug => bug.id)) + 1 : 11;
  } */
}
