import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from "./app.component";
import { AddTaskComponent } from "./components/Tasks/add-task/add-task.component";
import { TaskListComponent } from "./components/Tasks/task-list/task-list.component";
import { LogsListComponent } from "./components/Logs/logs-list/logs-list.component";
import { AddLogComponent } from "./components/Logs/add-log/add-log.component";
import { HeadComponent } from "./components/Main/head/head.component";
import { FootComponent } from "./components/Main/foot/foot.component";
import { TasksHomeComponent } from "./components/Tasks/tasks-home/tasks-home.component";
import { LogsHomeComponent } from "./components/Logs/logs-home/logs-home.component";
import { PatientsHomeComponent } from "./components/Patients/patients-home/patients-home.component";
import { AddPatientComponent } from "./components/Patients/add-patient/add-patient.component";
import { PatientsListComponent } from "./components/Patients/patients-list/patients-list.component";
import { AdminHomeComponent } from "./components/admin/admin-home/admin-home.component";
import { LoginComponent } from "./components/main/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    TasksHomeComponent,
    LogsHomeComponent,
    PatientsHomeComponent,
    AddPatientComponent,
    PatientsListComponent,
    AddTaskComponent,
    TaskListComponent,
    LogsListComponent,
    AddLogComponent,
    AdminHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
