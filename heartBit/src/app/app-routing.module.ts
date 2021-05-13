import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewPacientDataComponent } from './view-pacient-data/view-pacient-data.component';
import { ViewPulseHistoryComponent } from './view-pulse-history/view-pulse-history.component';

const routes: Routes = [
  { path: 'viewPulseHist', component: ViewPulseHistoryComponent },
  { path: 'viewPacientData', component: ViewPacientDataComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
