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


    this.httpClient.get("https://heartbitfis.azurewebsites.net/user/"+usr.value).subscribe((result:any) => {
      console.log(result[0]);
      this.pass =  result[0].Password;
      this.role = result[0].RoleId;
      
      if (this.pass.match(pwd.value)) {
        if (this.role == "1") {
          this.globalStateService.gUsername = usr.value;
          this.router.navigate(["viewPacientData"]);
        } else if (this.role.match("2")) {
          // navigate to view Doctor DaTA
        } else {
          window.alert("Group ID is wrong!");
        }  
      } else {
        window.alert("Password is wrong!");
      }
    })

  }
}
