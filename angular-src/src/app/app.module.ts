import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { EventService } from './services/event.service';
import { ContactHelplineComponent } from './components/contact-helpline/contact-helpline.component';
import { NotificationAdvisoryComponent } from './components/notification-advisory/notification-advisory.component';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { CompareCasesComponent } from './components/compare-cases/compare-cases.component';
import { MedicalcollegeComponent } from './components/medicalcollege/medicalcollege.component';
import { HospitalbedsComponent } from './components/hospitalbeds/hospitalbeds.component';
const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'medicalcollege', component: MedicalcollegeComponent},
  {path:'hospitalbeds', component: HospitalbedsComponent},
  {path:'contact-helpline', component: ContactHelplineComponent},
  {path:'notification-advisory', component: NotificationAdvisoryComponent},
  {path:'hospital-dashboard', component: HospitalDashboardComponent},
  {path:'compare-cases', component: CompareCasesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactHelplineComponent,
    NotificationAdvisoryComponent,
    HospitalDashboardComponent,
    CompareCasesComponent,
    MedicalcollegeComponent,
    HospitalbedsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
