import { Injectable } from "@angular/core";
import { GlobalService } from "src/app/services/Global/global.service";
import { IGuest } from "../../models/iguest";
import { BehaviorSubject } from "rxjs";

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

  constructor(private readonly gs: GlobalService) {}

  getAllGuests = () => {
    return this._guests;
  };
}
