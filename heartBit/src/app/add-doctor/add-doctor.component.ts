import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
      Save(nam,surname,age,pnc,adressStreet,adressLocation,adressCountry,adressPostalCode,phone,email,profession,job) {
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

    }
  }