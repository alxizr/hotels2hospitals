import { Injectable } from "@angular/core";
import { ILog } from "../../models/ilog";
import { BehaviorSubject } from "rxjs";
import { GlobalService } from "src/app/services/Global/global.service";

@Injectable({
  providedIn: "root"
})
export class LogsService {
  private logs = new BehaviorSubject<ILog[]>([
    { logDateTime: new Date(), logDescription: "some desc", logAuthor: "alex" },
    { logDateTime: new Date(), logDescription: "some desc", logAuthor: "alex" },
    { logDateTime: new Date(), logDescription: "some desc", logAuthor: "alex" },
    { logDateTime: new Date(), logDescription: "some desc", logAuthor: "alex" }
  ]);

  constructor(private readonly _gs: GlobalService) {}

  getAllLogs() {
    return this.logs;
  }

  addNewLog = (log: ILog) => {
    this._gs.shouldShowGlobalProgressBar(
      !this._gs.getGlobalProgressBar().getValue()
    );

    console.log(log);

    console.log("setting timeout");
    setTimeout(() => {
      this.logs.next([...this.logs.getValue(), log]);

      this._gs.shouldShowGlobalProgressBar(
        !this._gs.getGlobalProgressBar().getValue()
      );
    }, 5000);
  };
}
