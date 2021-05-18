import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("https://sandbox.api.service.nhs.uk/hello-world/hello/world").subscribe((result:any) => {

      console.log(result);
      console.log(result.name);
      this.name=result.name;

      console.log(result.surname);
      this.surname=result.surname;

            
      console.log(result.age);
      this.age=result.age;

      console.log(result.pnc);
      this.pnc=result.pnc;

      console.log(result.adressStreet);
      this.adressStreet=result.adressStreet;

      console.log(result.adressLocation);
      this.adressLocation=result.adressLocation;

      console.log(result.adressCountry);
      this.adressCountry=result.adressCountry;

      console.log(result.adressPostalCode);
      this.adressPostalCode=result.adressPostalCode;

      console.log(result.phone);
      this.phone=result.phone;

      console.log(result.email);
      this.email=result.email;

      console.log(result.profession);
      this.profession=result.profession;

      console.log(result.job);
      this.job=result.job;


      //pacient
      console.log(result);
      console.log(result.name);
      this.name=result.name;

      console.log(result.surname);
      this.surname=result.surname;
    })
  }
  Edit(nam,surname,age,pnc,adressStreet,adressLocation,adressCountry,adressPostalCode,phone,email,profession,job) {
    console.log(nam.value);
    console.log(surname.value);
    console.log(age.value);
    console.log(pnc.value);
    console.log(adressStreet.value);
    console.log(adressLocation.value);
    console.log(adressCountry.value);
    console.log(adressPostalCode.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(profession.value);
    console.log(job.value);
    this.router.navigate(["editPacient"]);
  }
  Delete(nam,surname,age,pnc,adressStreet,adressLocation,adressCountry,adressPostalCode,phone,email,profession,job) {
  console.log(nam.value);
  console.log(surname.value);
  console.log(age.value);
  console.log(pnc.value);
  console.log(adressStreet.value);
  console.log(adressLocation.value);
  console.log(adressCountry.value);
  console.log(adressPostalCode.value);
  console.log(phone.value);
  console.log(email.value);
  console.log(profession.value);
  console.log(job.value);
  this.router.navigate(["deletePacient"]);
  }
  AddPacient(nam,surname,age,pnc,adressStreet,adressLocation,adressCountry,adressPostalCode,phone,email,profession,job)
  {
    console.log(nam.value);
    console.log(surname.value);
    console.log(age.value);
    console.log(pnc.value);
    console.log(adressStreet.value);
    console.log(adressLocation.value);
    console.log(adressCountry.value);
    console.log(adressPostalCode.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(profession.value);
    console.log(job.value);
   this.router.navigate(["addPacient"]);
  }
}
