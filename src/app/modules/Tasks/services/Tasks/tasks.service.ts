import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "src/app/modules/Tasks/models/itask";
import { GlobalService } from "src/app/services/Global/global.service";

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
    },
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
    },
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
    },
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

  constructor(private readonly _gs: GlobalService) {}

  getAllTasks() {
    return this.tasks;
  }

  addNewTask = (task: ITask) => {
    this._gs.shouldShowGlobalProgressBar(
      !this._gs.getGlobalProgressBar().getValue()
    );

    console.log(task);

    console.log("setting timeout");
    setTimeout(() => {
      this.tasks.next([...this.tasks.getValue(), task]);

      this._gs.shouldShowGlobalProgressBar(
        !this._gs.getGlobalProgressBar().getValue()
      );
    }, 5000);
  };
}
