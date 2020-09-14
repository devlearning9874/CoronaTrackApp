import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification-advisory',
  templateUrl: './notification-advisory.component.html',
  styleUrls: ['./notification-advisory.component.css']
})
export class NotificationAdvisoryComponent implements OnInit {
  notification = []
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getNotification().subscribe(res => {
      this.notification = res,
      console.log(this.notification);
    },
     err => {
       console.log(err);
       return false;
     });
}

  }


