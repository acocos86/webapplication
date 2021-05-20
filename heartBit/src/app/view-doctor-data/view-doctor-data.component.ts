import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-view-doctor-data',
  templateUrl: './view-doctor-data.component.html',
  styleUrls: ['./view-doctor-data.component.scss'],
})
export class ViewDoctorDataComponent implements OnInit{
  name='';
  surname='';
  age='';
  pnc='';
  adressStreet='';
  adressLocation='';
  adressCountry='';
  adressPostalCode='';
  phone='';
  email='';
  profession='';
  job='';
  selectedUser='';
  arrPat: string [];
  selectedData='';
  doctorId='';
  userId='';
  pacientId='';
    constructor(private httpClient: HttpClient, private router: Router,private globalStateService : GlobalStateService) {
    
   }
  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/doctor/"+this.globalStateService.gUsername).subscribe((result:any) => {

      this.name=result[0].Name;
      this.userId=result[0].UserId;

      this.globalStateService.gDoctorId=result[0].DoctorId;
      this.httpClient.get("http://heartbitfis.azurewebsites.net/patientByDoctor/"+this.globalStateService.gDoctorId).subscribe((result:any) => {
        this.arrPat = result;
      })

    })
        
  }
  Edit() {
    this.globalStateService.gPacientId=this.selectedUser;
    this.router.navigate(["editPacient"]);
  }
  Refresh() {
    this.ngOnInit();
  }
  Delete() {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/patient/"+this.selectedUser).subscribe((result:any) => {
    this.pacientId=result[0].PatientId;
    this.httpClient.delete("http://heartbitfis.azurewebsites.net/rec/"+this.pacientId).subscribe((result:any) => {
      this.httpClient.delete("http://heartbitfis.azurewebsites.net/alert/"+this.pacientId).subscribe((result:any) => {
        this.httpClient.delete("http://heartbitfis.azurewebsites.net/patient/"+this.pacientId).subscribe((result:any) => {
          this.httpClient.delete("http://heartbitfis.azurewebsites.net/user/"+this.selectedUser).subscribe((result:any) => {
            this.ngOnInit();
          })  
        })
      })
    })
      
    })
  }
  AddPacient()
  {
   this.router.navigate(["addPacient"]);
  }
  ekgData() {
    this.router.navigate(["viewEcgHist"]);
  }
  pulseData() {
    this.router.navigate(["viewPulseHist"]);
  }
  onSelectCocosChange(value:string) {
    this.selectedUser=value;
    this.httpClient.get("http://heartbitfis.azurewebsites.net/patient/"+this.selectedUser).subscribe((result:any) => {
      this.globalStateService.gPacientId=result[0].PatientId;
    })
    console.log("the selected value is " + value);
  }
  addRec() {
    this.router.navigate(["addRec"]);
  }
}
