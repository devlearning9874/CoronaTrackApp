import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-helpline',
  templateUrl: './contact-helpline.component.html',
  styleUrls: ['./contact-helpline.component.css']
})
export class ContactHelplineComponent implements OnInit {
   contact = []
  constructor(private authService:AuthService, private router:Router) { }


    ngOnInit() {
      this.authService.getPhysics().subscribe(res => {
        this.contact = res,
        console.log(this.contact);
      },
       err => {
         console.log(err);
         return false;
       });
  }

}
