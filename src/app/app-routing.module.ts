import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PatientsHomeComponent } from "./components/Patients/patients-home/patients-home.component";
import { LogsHomeComponent } from "./components/Logs/logs-home/logs-home.component";
import { TasksHomeComponent } from "./components/Tasks/tasks-home/tasks-home.component";
import { PatientsListComponent } from "./components/Patients/patients-list/patients-list.component";
import { AddPatientComponent } from "./components/Patients/add-patient/add-patient.component";
import { LogsListComponent } from "./components/Logs/logs-list/logs-list.component";
import { AddLogComponent } from "./components/Logs/add-log/add-log.component";
import { TaskListComponent } from "./components/Tasks/task-list/task-list.component";
import { AddTaskComponent } from "./components/Tasks/add-task/add-task.component";
import { AdminHomeComponent } from "./components/admin/admin-home/admin-home.component";
import { LoginComponent } from "./components/main/login/login.component";

const routes: Routes = [
  {
    path: "patients",
    component: PatientsHomeComponent,
    children: [
      { path: "list", component: PatientsListComponent },
      { path: "add", component: AddPatientComponent },
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "**", redirectTo: "main" }
    ]
  },
  {
    path: "logs",
    component: LogsHomeComponent,
    children: [
      { path: "list", component: LogsListComponent },
      { path: "add", component: AddLogComponent },
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "**", redirectTo: "main" }
    ]
  },
  {
    path: "tasks",
    component: TasksHomeComponent,
    children: [
      { path: "list", component: TaskListComponent },
      { path: "add", component: AddTaskComponent },
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "**", redirectTo: "main" }
    ]
  },
  {
    path: "dashboard",
    component: AdminHomeComponent,
    children: [
      { path: "list", component: AdminHomeComponent },
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "**", redirectTo: "main" }
    ]
  },

  {
    path: "login",
    component: LoginComponent
  },

  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
