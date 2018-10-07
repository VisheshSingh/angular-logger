import { Component, OnInit } from "@angular/core";
import { Log } from "../../models/Log";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor() {}

  ngOnInit() {
    this.logs = [
      { id: 1, text: "Generated components", date: "12/27/2017 09:33:12" },
      { id: 2, text: "Added bootstrap", date: "12/28/2017 12:45:10" },
      { id: 3, text: "Log form component", date: "12/20/2017 02:12:56" }
    ];
  }
}
