import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

import { GuestRoutingModule } from "./guests-router.module";

import { GuestsHomeComponent } from "./components/guests-home/guests-home.component";
import { GuestsListComponent } from "./components/guests-list/guests-list.component";
import { AddGuestComponent } from "./components/add-guest/add-guest.component";

@NgModule({
  declarations: [GuestsHomeComponent, GuestsListComponent, AddGuestComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    
  ]
})
export class GuestsModule {}
