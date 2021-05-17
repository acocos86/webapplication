import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientComponent } from './add-pacient/add-pacient.component';
import { EditPacientComponent } from './edit-pacient/edit-pacient.component';
import { LoginComponent } from './login/login.component';                                                                                                                                                                                           import { ViewEcgHistoryComponent } from './view-ecg-history/view-ecg-history.component';
import { ViewPacientDataComponent } from './view-pacient-data/view-pacient-data.component';
import { ViewPulseHistoryComponent } from './view-pulse-history/view-pulse-history.component';

const routes: Routes = [
  { path: 'viewPulseHist', component: ViewPulseHistoryComponent },
  { path: 'viewPacientData', component: ViewPacientDataComponent },
  { path: 'addPacient', component: AddPacientComponent },
  { path: 'editPacient', component: EditPacientComponent },
  { path: 'viewEcgHist', component: ViewEcgHistoryComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
