import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GlobalStateService from '../global-state.service';
import * as CanvasJS from '../canvasjs.min';

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
    let dataPoints = [];
    let y = 0;
    console.log(this.globalStateService.gPacientId);
    this.httpClient.get("http://heartbitfis.azurewebsites.net/alert2/"+this.globalStateService.gPacientId).subscribe((result:any) => {
      this.arrEcg = result;
      this.arrEcg.reverse();

      console.log(this.arrEcg.length);
      
      for (var i = 0; i < this.arrEcg.length; i++ ) {
        y = parseInt(result[i].Level);
        dataPoints.push({ y: y });
      }
      let chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "ECG History"
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
}
}
