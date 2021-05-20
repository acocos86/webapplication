import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-edit-pacient',
  templateUrl: './edit-pacient.component.html',
  styleUrls: ['./edit-pacient.component.scss']
})
export class EditPacientComponent implements OnInit {
  patientId='';
  userId='';
  doctorId='';
  name='';
  surname='';
  cnp='';
  phone='';
  email='';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/patient/"+this.globalStateService.gPacientId).subscribe((result:any) => {
    this.patientId=result[0].PatientId
    this.userId=result[0].UserId
    this.doctorId=result[0].DoctorId
    this.name=result[0].Name
    this.surname=result[0].Surname;
    this.cnp=result[0].PNC
    this.phone=result[0].Phone
    this.email=result[0].Email
  })  
  
  }

  editPacient(Name,Surname,Phone,Email,Cnp){
    const bodyPacient2 = [{"PatientId":15,"UserId":34,"DoctorId":1,"Name":"Adrian","Surname":"Cocosss","Age":0,"PNC":786096522554,"AddressStreet":"","AddressNumber":"","AddressLocation":"Timisoara","AddressCounty":"Timis","AddressPostalCode":"","Phone":"0734443725","Email":"a.cocos86@gmail.com","Profession":"Software Developer","Job":"IBMDATA"}];
    const bodyPacient = [{"PatientId":this.patientId,"UserId":this.userId,"DoctorId":this.doctorId,"Name":Name.value,"Surname":Surname.value,"PNC":Cnp.value,"Email":Email.value,"Phone":Phone.value,"Age":0,"AddressStreet":"","AddressNumber":"","AddressLocation":"","AddressCounty":"","AddressPostalCode":"","Profession":"","Job":""}];
    console.log(bodyPacient);
    console.log(this.patientId);
    this.httpClient.patch("http://heartbitfis.azurewebsites.net/patient/"+this.patientId, bodyPacient, this.httpHeader).subscribe(data => {
    console.log(data);
    this.router.navigate(["viewDoctorData"]);
  })      
  }

}
