import { Component, OnInit } from "@angular/core";

import { Log } from "../../models/Log";
import { LogsService } from "../../services/logs.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
  id: number;
  text: string;
  date: any;

  constructor(private logsService: LogsService) {}

  ngOnInit() {
    this.logsService.selectedSource.subscribe(log => {
      if (log.id !== null) {
        (this.id = log.id), (this.text = log.text), (this.date = log.date);
      }
    });
  }

  clearLog() {
    (this.id = null), (this.text = ""), (this.date = "");
  }
}
