import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AdminHomeComponent
    // children: [
    //   { path: "list", component: AdminHomeComponent },
    //   { path: "", pathMatch: "full", redirectTo: "list" }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
