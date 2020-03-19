import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ITask } from "src/app/models/itask";
import { TasksService } from "src/app/services/Tasks/tasks.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup = null;
  constructor(private readonly tasksvc: TasksService) {}

  ngOnInit(): void {
    let today = new Date(); // create date object
    today.setDate(today.getDate() + 5); // add 5 days from today

    this.taskForm = new FormGroup({
      taskType: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      taskResponsibility: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      taskEndDate: new FormControl(
        today.toISOString().split("T")[0],
        Validators.required
      )
    });
  }

  handleSubmit = () => {
    // let task: ITask = this.taskForm.value;
    this.tasksvc.addNewTask(this.taskForm.value as ITask);
  };
}
