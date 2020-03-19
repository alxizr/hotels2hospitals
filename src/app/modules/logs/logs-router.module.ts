import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";

import { LogsHomeComponent } from "./components/logs-home/logs-home.component";
import { LogsListComponent } from "./components/logs-list/logs-list.component";
import { AddLogComponent } from "./components/add-log/add-log.component";

const routes: Routes = [
  {
    path: "",
    component: LogsHomeComponent,
    children: [
      { pathMatch: "full", path: "", redirectTo: "list" },
      { path: "list", component: LogsListComponent },
      { path: "add", component: AddLogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule {}
