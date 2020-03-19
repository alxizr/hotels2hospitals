import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { TasksRoutingModule } from "./tasks-router.module";
import { MaterialModule } from "../material/material.module";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TasksHomeComponent } from "./components/tasks-home/tasks-home.component";

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [AddTaskComponent, TaskListComponent, TasksHomeComponent]
})
export class TasksModule {}
