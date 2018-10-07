import { Component, OnInit } from "@angular/core";
import { Log } from "../../models/Log";
import { LogsService } from "../../services/logs.service";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logsService: LogsService) {}

  ngOnInit() {
    this.logsService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = { id: "", text: "", date: "" };
      }
    });

    this.logsService.getLogs().subscribe(log => {
      this.logs = log;
    });
  }

  onSelect(log: Log) {
    this.logsService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm("Are you sure?")) this.logsService.deleteLog(log);
  }
}
