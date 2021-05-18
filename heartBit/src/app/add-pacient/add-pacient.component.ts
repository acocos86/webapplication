import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.scss']
})
export class AddPacientComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
    doSave(user,role,name,email,pass)
    {
    
    }
}
