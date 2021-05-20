import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import GlobalStateService from '../global-state.service';

@Component({
  selector: 'app-add-recomandation',
  templateUrl: './add-recomandation.component.html',
  styleUrls: ['./add-recomandation.component.scss']
})
export class AddRecomandationComponent implements OnInit {
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  constructor(private httpClient: HttpClient, private router: Router, private globalStateService : GlobalStateService) { }

  ngOnInit(): void {
  }
  addRec(Rec) {
    const bodyRec = {"PatientId":this.globalStateService.gPacientId,"Date":Date.now().toString,"Recom":Rec.value};
      console.log(bodyRec);
      this.httpClient.put("http://heartbitfis.azurewebsites.net/rec", bodyRec, this.httpHeader).subscribe(data => {
      })  
      this.router.navigate(["viewDoctorData"]);
  }

}
