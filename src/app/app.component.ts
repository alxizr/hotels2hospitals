import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { GlobalService } from "./services/Global/global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Hotels Field Hospitals";

  constructor(
    private readonly _gs: GlobalService,
    private readonly _router: Router
  ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("nav start");
        this._gs.shouldShowGlobalProgressBar(
          !this._gs.getGlobalProgressBar().getValue()
        );
      } else {
        setTimeout(() => {
          console.log("nav ended or something");

          this._gs.shouldShowGlobalProgressBar(
            !this._gs.getGlobalProgressBar().getValue()
          );
        }, 2000);
      }
    });
  }
}
