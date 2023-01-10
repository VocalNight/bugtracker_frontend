import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, finalize, Observable } from "rxjs";
import { BugService } from "./bug-service.service";
import { Bug } from "./bug.model";

export class BugsDataSource implements DataSource<Bug> {

  private bugsSubject = new BehaviorSubject<Bug[]>([])
  constructor(private bugService: BugService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Bug[]> {
    return this.bugsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.bugsSubject.complete()
  }

  loadBugs() {
    this.bugService.getBugs()
      .subscribe(bugs => this.bugsSubject.next(bugs));
  }

}
