import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalcollege',
  templateUrl: './medicalcollege.component.html',
  styleUrls: ['./medicalcollege.component.css']
})
export class MedicalcollegeComponent implements OnInit {
  medicalcollege = []
  
  constructor(private eventService:EventService, private router:Router) { }
  

  ngOnInit() {
    this.eventService.getMedicalcollege().subscribe(res => {
      this.medicalcollege = res
     // console.log(this.medicalcollege);
    },
     err => {
       console.log(err);
       return false;
     });
}




  }

  


