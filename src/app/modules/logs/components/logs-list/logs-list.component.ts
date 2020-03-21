import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ILog } from "../../models/ilog";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { LogsService } from "../../services/Logs/logs.service";

@Component({
  selector: "app-logs-list",
  templateUrl: "./logs-list.component.html",
  styleUrls: ["./logs-list.component.scss"]
})
export class LogsListComponent implements OnInit {
  private _loglist;

  displayedColumns: string[] = [
    "id",
    "logAuthor",
    "logDescription",
    "logDate",
    "logTime"
  ];
  dataSource: MatTableDataSource<ILog> = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private readonly _logsvc: LogsService) {}

  ngOnInit(): void {
    this._logsvc.getAllLogs().subscribe(data => {
      this._loglist = data.map((x, i) => {
        return { ...x, id: i + 1 };
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this._loglist);
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
