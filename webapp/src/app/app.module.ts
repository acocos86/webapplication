import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddPacientComponent } from './add-pacient/add-pacient.component';
import { EditPacientComponent } from './edit-pacient/edit-pacient.component';
import { ViewPacientComponent } from './view-pacient/view-pacient.component';
import { ViewPacientDataComponent } from './view-pacient-data/view-pacient-data.component';
import { ViewDoctorDataComponent } from './view-doctor-data/view-doctor-data.component';
import { ViewEKGHistoryComponent } from './view-ekghistory/view-ekghistory.component';
import { ViewPulseHistoryComponent } from './view-pulse-history/view-pulse-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPacientComponent,
    EditPacientComponent,
    ViewPacientComponent,
    ViewPacientDataComponent,
    ViewDoctorDataComponent,
    ViewEKGHistoryComponent,
    ViewPulseHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
