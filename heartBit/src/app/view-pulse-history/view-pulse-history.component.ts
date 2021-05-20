import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';
import * as CanvasJS from '../canvasjs.min';

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
    let dataPoints = [];
    let y = 0;
    let x = new Date();
    this.httpClient.get("http://heartbitfis.azurewebsites.net/alert1/"+this.globalStateService.gPacientId).subscribe((result:any) => {
      this.arrPulse = result;
      this.arrPulse.reverse();

      for (var i = 0; i < this.arrPulse.length; i++ ) {
        y = parseInt(result[i].Level);
        dataPoints.push({ y: y });
      }
      let chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Pulse History"
        },
        data: [
        {
          type: "line",                
          dataPoints: dataPoints
        }]
      });

      chart.render();
    })
}
Refresh() {
  this.ngOnInit();
}}