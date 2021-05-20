import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import GlobalStateService from '../global-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-pacient-data',
  templateUrl: './view-pacient-data.component.html',
  styleUrls: ['./view-pacient-data.component.scss']
})
export class ViewPacientDataComponent implements OnInit {
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
  username='';
  arrRec: string [];
  

  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/user/"+this.globalStateService.gUsername).subscribe((result:any) => {

 
      this.username=result[0].UserId;
      this.email=result[0].Email;
    	this.httpClient.get("http://heartbitfis.azurewebsites.net/patient/"+this.globalStateService.gUsername).subscribe((result:any) => {
        this.name=result[0].Name;
        this.surname=result[0].Surname;
        this.pnc=result[0].PNC;
        this.phone=result[0].Phone;
        this.globalStateService.gPacientId=result[0].PatientId;

        this.httpClient.get("http://heartbitfis.azurewebsites.net/rec/"+this.globalStateService.gPacientId).subscribe((result:any) => {
          this.arrRec = result;
          this.arrRec.reverse();
        })
      })

    })

  }
  Refresh() {
    this.ngOnInit();
  }

  

  }

