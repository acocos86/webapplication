import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPacientDataComponent } from './view-pacient-data/view-pacient-data.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPulseHistoryComponent } from './view-pulse-history/view-pulse-history.component';
import { AddPacientComponent } from './add-pacient/add-pacient.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPacientDataComponent,
    LoginComponent,
    ViewPulseHistoryComponent,
    AddPacientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
