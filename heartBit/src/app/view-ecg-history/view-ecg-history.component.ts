import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-view-ecg-history',
  templateUrl: './view-ecg-history.component.html',
  styleUrls: ['./view-ecg-history.component.scss']
})
export class ViewEcgHistoryComponent implements OnInit {
  data='';
  hour='';
  value='';
  arrEcg: string [];
  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
    this.httpClient.get("http://heartbitfis.azurewebsites.net/alert1/"+this.globalStateService.gPacientId).subscribe((result:any) => {
      this.arrEcg = result;
    })
}
Refresh() {
  this.ngOnInit();
}
}
