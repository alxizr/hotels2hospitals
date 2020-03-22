import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";

import { GuestsHomeComponent } from "./components/guests-home/guests-home.component";
import { GuestsListComponent } from "./components/guests-list/guests-list.component";
import { AddGuestComponent } from "./components/add-guest/add-guest.component";

const routes: Routes = [
  {
    path: "",
    component: GuestsHomeComponent,
    children: [
      { path: "add/:id", component: AddGuestComponent },
      { path: "add", component: AddGuestComponent },
      { path: "list", component: GuestsListComponent },
      { path: "", pathMatch: "full", redirectTo: "list" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {}
