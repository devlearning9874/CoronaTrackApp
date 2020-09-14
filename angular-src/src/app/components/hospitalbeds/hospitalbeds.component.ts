import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospitalbeds',
  templateUrl: './hospitalbeds.component.html',
  styleUrls: ['./hospitalbeds.component.css']
})
export class HospitalbedsComponent implements OnInit {
  hospitalbeds = []
  constructor(private eventService:EventService, private router:Router) { }
  
  ngOnInit() {
    this.eventService.getHospitalbeds().subscribe(res => {
      this.hospitalbeds = res,
      console.log(this.hospitalbeds);
    },
     err => {
       console.log(err);
       return false;
     });
}
  }


