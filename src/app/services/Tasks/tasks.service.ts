import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "src/app/models/itask";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  private tasks = new BehaviorSubject<ITask[]>([
    {
      taskEndDate: new Date(),
      taskResponsibility: "Alex",
      taskType: "Get food"
    },

    {
      taskEndDate: new Date(),
      taskResponsibility: "Shai",
      taskType: "Get clothes"
    },

    {
      taskEndDate: new Date(),
      taskResponsibility: "Nitzan",
      taskType: "Get phone"
    }
  ]);

  getAllTasks() {
    return this.tasks;
  }

  addNewTask = (task: ITask) => {
    console.log(task);
    this.tasks.next([...this.tasks.getValue(), task]);
  };

  constructor() {}
}
