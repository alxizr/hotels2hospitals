import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { GuestsService } from "../../services/Guests/guests.service";
import { IGuest } from "../../models/iguest";
import { Router } from "@angular/router";

@Component({
  selector: "app-guests-list",
  templateUrl: "./guests-list.component.html",
  styleUrls: ["./guests-list.component.scss"]
})
export class GuestsListComponent implements OnInit {
  private _guestList;

  displayedColumns: string[] = [
    "IDNumber",
    "firstName",
    "lastName",
    "serialNumber",
    "hotelName",
    "hotel",
    "phone",
    "address",
    "city",

    "conversation",
    "religious",
    "mda",
    "guidelines",
    "sentToKabala",
    "released",
    "roomNum",
    "numChildren",
    "releaseDate",
    "hafnayaTime",
    "collectingDate",
    "receptionTime",
    "arrivingTime",
    "collectingAddress",
    "origin",
    "sourceHospital",
    "apotropus",
    "birthCountry",
    "language",
    "allergies",
    "contactPhone",
    "altContactPhone",
    "foodRestrictions",
    "familyStatus",
    "sex",
    "kupatHolim",
    "status",
    "comments",
    "disabilities"
  ];
  dataSource: MatTableDataSource<IGuest> = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private readonly _guestsvc: GuestsService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._guestsvc.getAllGuests().subscribe(data => {
      this._guestList = data.map((x, i) => {
        return { ...x, id: i + 1 };
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this._guestList);
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

  handleRowClicked = async (ev?) => {
    // add click event to table row
    console.log("row clicked", ev);

    await this._router.navigate(["guests/add/", ev.id]);
  };
}
