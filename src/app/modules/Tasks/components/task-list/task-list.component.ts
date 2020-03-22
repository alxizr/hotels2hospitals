import { Component, OnInit, ViewChild } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ITask } from "src/app/modules/Tasks/models/itask";
import { TasksService } from "src/app/modules/Tasks/services/Tasks/tasks.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  private _tasklist;

  displayedColumns: string[] = [
    "id",
    "taskType",
    "taskResponsibility",
    "taskEndDate",
    "taskEndTime"
  ];
  dataSource: MatTableDataSource<ITask> = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private readonly tasksvc: TasksService) {}

  ngOnInit(): void {
    this.tasksvc.getAllTasks().subscribe(data => {
      this._tasklist = [...data, ...data, ...data].map((x, i) => {
        return { ...x, id: i + 1 };
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this._tasklist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  };

  handleRowClicked = (ev?) => {
    // add click event to table row
    console.log("row clicked", ev);
  };
}
