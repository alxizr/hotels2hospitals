import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"]
})
export class HeadComponent implements OnInit {
  navbarClasses = {
    collapse: true
  };

  constructor() {}

  ngOnInit(): void {}

  handleMenuClick = () => {
    this.navbarClasses.collapse = !this.navbarClasses.collapse;
  };
}
