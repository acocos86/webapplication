import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(usr,pwd) {
    console.log(usr.value);
    console.log(pwd.value);

    // Aicea se face un http request cu user si parola ca sa se verifice datele si bazat pe raspuns se navigheaza mai departe 
    this.router.navigate(["viewPacientData"]);
  }
}
