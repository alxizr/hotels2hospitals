import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/Global/global.service";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"]
})
export class HeadComponent implements OnInit {
  navbarClasses = {
    collapse: true
  };

  constructor(readonly gs: GlobalService) {}

  _showProgressBar = false;

  ngOnInit(): void {
    this.gs.getGlobalProgressBar().subscribe(b => {
      this._showProgressBar = b;
    });
  }

  handleMenuClick = () => {
    this.navbarClasses.collapse = !this.navbarClasses.collapse;
  };

  handleClick = () => {
    this.gs.shouldShowGlobalProgressBar(!this._showProgressBar);
  };
}
