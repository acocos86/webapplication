import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-doctor-data',
  templateUrl: './view-doctor-data.component.html',
  styleUrls: ['./view-doctor-data.component.scss']
})
export class ViewDoctorDataComponent implements OnInit {
  message = '';
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("https://sandbox.api.service.nhs.uk/hello-world/hello/world").subscribe((result:any) => {
      console.log(result);
      console.log(result.message);
      this.message=result.message;
    })
  }

}
