import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-view-doctor-data',
  templateUrl: './view-doctor-data.component.html',
  styleUrls: ['./view-doctor-data.component.scss']
})
export class ViewDoctorDataComponent implements OnInit {
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

  constructor(private httpClient: HttpClient, private router: Router,private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("https://heartbitfis.azurewebsites.net/user/"+this.globalStateService.gUsername).subscribe((result:any) => {

      
      this.name=result[0].Name;

      this.email=result[0].Email;


    })
  }
  Edit() {
    this.router.navigate(["editPacient"]);
  }
  Delete() { }
  AddPacient()
  {
   this.router.navigate(["addPacient"]);
  }
}
