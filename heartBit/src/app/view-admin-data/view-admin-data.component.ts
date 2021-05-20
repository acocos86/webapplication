import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-view-admin-data',
  templateUrl: './view-admin-data.component.html',
  styleUrls: ['./view-admin-data.component.scss']
})
export class ViewAdminDataComponent implements OnInit {
  arrDoc: string [];
  constructor(private httpClient: HttpClient, private router: Router,private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/doctors").subscribe((result:any) => {
        this.arrDoc = result;
      })
  }
  AddDoctor() {
    this.router.navigate(["addDoctor"]);
  }
  Refresh() {
    this.ngOnInit();
  }
}
