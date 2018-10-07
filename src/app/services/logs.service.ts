import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LogsService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedSource = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generated components",
        date: new Date("12/27/2017 09:33:12")
      },
      {
        id: "2",
        text: "Added bootstrap",
        date: new Date("12/28/2017 12:45:10")
      },
      {
        id: "3",
        text: "Log form component",
        date: new Date("12/20/2017 02:12:56")
      }
    ];
  }

  getLogs(): Observable<Log[]> {
    console.log("Fetching logs from service...");
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }

  clearState() {
    this.stateSource.next(true);
  }
}
