import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EventService {

  constructor(private http: Http,private https: HttpClient) { }
 
 
  getContacts() {
       
    return this.https.get<any>('api/contact-helpline')
  }

  getNotification() {
    
    return this.https.get<any>('api/notification-advisory')
  }
  getHospitalbeds() {
    
    return this.https.get<any>('beds/hospital-beds')
  }
  getMedicalcollege() {
    
    return this.https.get<any>('beds/medical-college')
  }


}
