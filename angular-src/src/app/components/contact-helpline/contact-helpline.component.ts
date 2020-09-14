import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-helpline',
  templateUrl: './contact-helpline.component.html',
  styleUrls: ['./contact-helpline.component.css']
})
export class ContactHelplineComponent implements OnInit {
   contact = []
  constructor(private eventService:EventService, private router:Router) { }


    ngOnInit() {
      this.eventService.getContacts().subscribe(res => {
        this.contact = res,
        console.log(this.contact);
      },
       err => {
         console.log(err);
         return false;
       });
  }

}
