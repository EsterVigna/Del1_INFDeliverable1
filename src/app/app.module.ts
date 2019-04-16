import { AuthService } from './auth.service';
import { StatisticsComponent } from './Pages/statistics/statistics.component';
import { TreatmentComponent } from './Pages/treatment/treatment.component';
import { CausesComponent } from './Pages/causes/causes.component';
import { LogINComponent } from './Pages/log-in/log-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'log-in', component: LogINComponent},
  { path: 'Causes', component: CausesComponent},
  { path: 'Treatment', component: TreatmentComponent},
  { path: 'Statistics', component: StatisticsComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LogINComponent,
    CausesComponent,
    TreatmentComponent,
    StatisticsComponent,
    AdminComponent,
    RegistrationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes),
      HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
