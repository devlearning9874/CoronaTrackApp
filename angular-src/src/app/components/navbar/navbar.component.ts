import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: EventService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  
}
