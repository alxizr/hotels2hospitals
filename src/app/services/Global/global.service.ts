import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  private _globalProgressBar = new BehaviorSubject(true);
  constructor() {}

  shouldShowGlobalProgressBar = (showorhide: boolean) => {
    this._globalProgressBar.next(showorhide);
  };

  getGlobalProgressBar = () => {
    return this._globalProgressBar;
  };
}
