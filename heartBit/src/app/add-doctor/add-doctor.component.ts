import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import GlobalStateService from '../global-state.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
  }
  Save(name,email) {
    console.log(name.value);
    console.log(email.value);
    const bodyUser = [{"RoleId":2,"Name":name.value,"Email":email.value,"Password":"test"}];
    
    console.log(bodyUser);
    this.httpClient.put("http://heartbitfis.azurewebsites.net/user", bodyUser, this.httpHeader).subscribe(data => {
      console.log(data);
      const bodyDoctor = {"UserId":data[0].UserId,"Name":name.value};
      console.log(bodyDoctor);
      this.httpClient.put("http://heartbitfis.azurewebsites.net/doctor", bodyDoctor, this.httpHeader).subscribe(data => {
      })  
    });
    this.router.navigate(["viewAdminData"]);


  }
  }