import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { MathComponent } from './components/math/math.component';
import { PhysicsComponent } from './components/physics/physics.component';
import { ChemistryComponent } from './components/chemistry/chemistry.component';
import { EventsComponent } from './components/events/events.component';
import { EventService } from './services/event.service';
import { ContactHelplineComponent } from './components/contact-helpline/contact-helpline.component';
import { NotificationAdvisoryComponent } from './components/notification-advisory/notification-advisory.component';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { CompareCasesComponent } from './components/compare-cases/compare-cases.component';
const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'events', component: EventsComponent},
  {path:'physics', component: PhysicsComponent},
  {path:'chemistry', component: ChemistryComponent},
  {path:'math', component: MathComponent},
  {path:'contact-helpline', component: ContactHelplineComponent},
  {path:'notification-advisory', component: NotificationAdvisoryComponent},
  {path:'hospital-dashboard', component: HospitalDashboardComponent},
  {path:'compare-cases', component: CompareCasesComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    MathComponent,
    PhysicsComponent,
    ChemistryComponent,
    EventsComponent,
    ContactHelplineComponent,
    NotificationAdvisoryComponent,
    HospitalDashboardComponent,
    CompareCasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
