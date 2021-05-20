import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPacientComponent } from './add-pacient/add-pacient.component';
import { AddRecomandationComponent } from './add-recomandation/add-recomandation.component';
import { EditPacientComponent } from './edit-pacient/edit-pacient.component';
import { LoginComponent } from './login/login.component';import { ViewAdminDataComponent } from './view-admin-data/view-admin-data.component';
import { ViewDoctorDataComponent } from './view-doctor-data/view-doctor-data.component';
                                                                                                                                                                                           import { ViewEcgHistoryComponent } from './view-ecg-history/view-ecg-history.component';
import { ViewPacientDataComponent } from './view-pacient-data/view-pacient-data.component';
import { ViewPulseHistoryComponent } from './view-pulse-history/view-pulse-history.component';

const routes: Routes = [
  { path: 'viewPulseHist', component: ViewPulseHistoryComponent },
  { path: 'viewPacientData', component: ViewPacientDataComponent },
  { path: 'addPacient', component: AddPacientComponent },
  { path: 'editPacient', component: EditPacientComponent },
  { path: 'viewEcgHist', component: ViewEcgHistoryComponent },
  { path: 'viewDoctorData', component: ViewDoctorDataComponent },
  { path: 'viewAdminData', component: ViewAdminDataComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'addRec', component: AddRecomandationComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }