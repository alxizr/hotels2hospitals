import { Injectable } from "@angular/core";
import { GlobalService } from "src/app/services/Global/global.service";
import { IGuest } from "../../models/iguest";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GuestsService {
  private _guests = new BehaviorSubject<IGuest[]>([
    {
      firstName: "alex",
      lastName: "izr",
      serialNumber: 123456789,
      hotelName: "dan tel aviv",
      hotel: "1qaz2wsx",
      phone: "0532267598",
      address: "moriah 43",
      city: "haifa"
    }
  ]);

  constructor(
    private readonly _http: HttpClient,
    private readonly _gs: GlobalService
  ) {}

  getAllGuests = () => {
    return this._http.get<IGuest[]>("/assets/fake.json");
    // .pipe(take(1))
    // .subscribe(x =>
    //   console.log(Object.keys(x[0]).length, Object.keys(x[0]).join(","))
    // );

    // return this._guests;
  };
}
