import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from "./app.component";

import { HeadComponent } from "./components/Main/head/head.component";
import { FootComponent } from "./components/Main/foot/foot.component";
import { AdminHomeComponent } from "./components/admin/admin-home/admin-home.component";
import { LoginComponent } from "./components/main/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    AdminHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
