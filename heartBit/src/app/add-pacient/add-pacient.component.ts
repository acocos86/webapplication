import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.scss']
})
export class AddPacientComponent implements OnInit {
  doctorId='';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("https://heartbitfis.azurewebsites.net/doctor/"+this.globalStateService.gUsername).subscribe((result:any) => {
      console.log(result[0]);
      this.doctorId=result[0].DoctorId;
  })
  }

  addPacient(Name,Email,Username,Surname,CNP,Phone) { 
    const bodyUser = [{"RoleId":3,"Name":Username.value,"Email":Email.value,"Password":"test"}];
    console.log("Userbody");
    console.log(bodyUser);
    this.httpClient.put("http://heartbitfis.azurewebsites.net/user", bodyUser, this.httpHeader).subscribe(data => {
      console.log(data);
      
      const bodyPacient = {"UserId":data[0].UserId,"DoctorId":this.doctorId,"Name":Name.value,"Surname":Surname.value,"PNC":CNP.value,"Email":Email.value,"Phone":Phone.value,"Age":0,"AddressStreet":"","AddressNumber":"","AddressLocation":"","AddressCounty":"","AddressPostalCode":"","Profession":"","Job":""};
      console.log("PacientBody");
      console.log(bodyPacient);
      this.httpClient.put("http://heartbitfis.azurewebsites.net/patient", bodyPacient, this.httpHeader).subscribe(data => {
      })  
    });
    this.router.navigate(["viewDoctorData"]);
  }
}
