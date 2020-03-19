import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./components/admin/admin-home/admin-home.component";
import { LoginComponent } from "./components/main/login/login.component";

const routes: Routes = [
  {
    path: "guests",
    loadChildren: () =>
      import("./modules/Guests/guests.module").then(m => m.GuestsModule)
  },
  {
    path: "logs",
    loadChildren: () =>
      import("./modules/logs/logs.module").then(m => m.LogsModule)
  },
  {
    path: "tasks",
    loadChildren: () =>
      import("./modules/Tasks/tasks.module").then(m => m.TasksModule)
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
