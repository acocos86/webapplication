import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-view-pulse-history',
  templateUrl: './view-pulse-history.component.html',
  styleUrls: ['./view-pulse-history.component.scss']
})
export class ViewPulseHistoryComponent implements OnInit {
  data='';
  hour='';
  value='';
  arrPulse: string [];

  constructor(private httpClient: HttpClient, private router: Router,private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/alert1/"+this.globalStateService.gPacientId).subscribe((result:any) => {
      this.arrPulse = result;
    })
}
Refresh() {
  this.ngOnInit();
}}