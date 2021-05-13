import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-pacient-data',
  templateUrl: './view-pacient-data.component.html',
  styleUrls: ['./view-pacient-data.component.scss']
})
export class ViewPacientDataComponent implements OnInit {
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
