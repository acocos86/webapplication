import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, withLatestFrom } from 'rxjs/operators';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pass = '';
  role = '';

  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }
  
  ngOnInit(): void {
  }



  doLogin(usr,pwd) {


    this.httpClient.get("http://heartbitfis.azurewebsites.net/user/"+usr.value).subscribe((result:any) => {
      console.log(result[0]);
      this.pass =  result[0].Password;
      this.role = result[0].RoleId;
      
      if (this.pass.match(pwd.value)) {
        this.globalStateService.gUsername = usr.value;
        this.globalStateService.gUserId = usr.value;
        if (this.role == "3") { 
          this.router.navigate(["viewPacientData"]);
        } else if (this.role=="2") {
          this.router.navigate(["viewDoctorData"]);
        } else if (this.role=="1"){
          this.router.navigate(["viewAdminData"]);
        } else {
          window.alert("Group ID is wrong!");
        }  
      } else {
        window.alert("Password is wrong!");
      }
    })

  }
}
