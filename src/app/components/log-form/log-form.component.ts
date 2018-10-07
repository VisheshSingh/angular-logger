import { Component, OnInit } from "@angular/core";

import { Log } from "../../models/Log";
import { LogsService } from "../../services/logs.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
  constructor(private logsService: LogsService) {}

  ngOnInit() {
    this.logsService.selectedSource.subscribe(log => {
      console.log(log);
    });
  }
}
