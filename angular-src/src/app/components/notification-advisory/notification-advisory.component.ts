import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification-advisory',
  templateUrl: './notification-advisory.component.html',
  styleUrls: ['./notification-advisory.component.css']
})
export class NotificationAdvisoryComponent implements OnInit {
  notification = []
  constructor(private eventService:EventService, private router:Router) { }

  ngOnInit() {
    this.eventService.getNotification().subscribe(res => {
      this.notification = res,
      console.log(this.notification);
    },
     err => {
       console.log(err);
       return false;
     });
}

  }


