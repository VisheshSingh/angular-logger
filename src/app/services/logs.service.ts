import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root"
})
export class LogsService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: 1,
        text: "Generated components",
        date: new Date("12/27/2017 09:33:12")
      },
      { id: 2, text: "Added bootstrap", date: new Date("12/28/2017 12:45:10") },
      {
        id: 3,
        text: "Log form component",
        date: new Date("12/20/2017 02:12:56")
      }
    ];
  }

  getLogs() {
    console.log("Fetching logs from service...");
    return this.logs;
  }
}
