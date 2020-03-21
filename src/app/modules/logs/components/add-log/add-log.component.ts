import { Component, OnInit } from "@angular/core";
import { LogsService } from "../../services/Logs/logs.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ILog } from "../../models/ilog";

@Component({
  selector: "app-add-log",
  templateUrl: "./add-log.component.html",
  styleUrls: ["./add-log.component.scss"]
})
export class AddLogComponent implements OnInit {
  logForm: FormGroup = null;

  constructor(private readonly _logsvc: LogsService) {}

  ngOnInit(): void {
    let today = new Date(Date.now()); // create date object
    console.log(
      today
        .toISOString()
        .split("T")[1]
      //.split(".")[0]
    );

    this.logForm = new FormGroup({
      logDescription: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      logAuthor: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      logDateTime: new FormControl(today, Validators.required)
    });
  }

  handleSubmit = () => {
    // let task: ITask = this.logForm.value;
    this._logsvc.addNewLog(this.logForm.value as ILog);
  };
}
