import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class PhysicsComponent implements OnInit {
  physics = []
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getPhysics().subscribe(res => {
      this.physics = res,
      console.log(this.physics)
    },
     err => {
       console.log(err);
       return false;
     });
  }

  }


