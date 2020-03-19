import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { TasksHomeComponent } from "./components/tasks-home/tasks-home.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

const routes: Routes = [
  {
    path: "",
    component: TasksHomeComponent,
    children: [
      { pathMatch: "full", path: "", redirectTo: "list" },
      { path: "list", component: TaskListComponent },
      { path: "add", component: AddTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
