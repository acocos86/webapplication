import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';

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

  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("https://heartbitfis.azurewebsites.net/user/"+this.globalStateService.gUsername).subscribe((result:any) => {

 
      this.name=result[0].Name;


      //this.surname=result.surname;
      //this.age=result.age;

      //this.pnc=result.pnc;

  
      //this.adressStreet=result.adressStreet;

      //this.adressLocation=result.adressLocation;


      //this.adressCountry=result.adressCountry;


      //this.adressPostalCode=result.adressPostalCode;


      //this.phone=result.phone;

 
      this.email=result[0].Email;


      //this.profession=result.profession;


      //this.job=result.job;
    })
  }

}
