import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogsHomeComponent } from "./components/logs-home/logs-home.component";
import { LogsListComponent } from "./components/logs-list/logs-list.component";
import { AddLogComponent } from "./components/add-log/add-log.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { LogsRoutingModule } from "./logs-router.module";

@NgModule({
  declarations: [LogsHomeComponent, LogsListComponent, AddLogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LogsRoutingModule
  ]
})
export class LogsModule {}
