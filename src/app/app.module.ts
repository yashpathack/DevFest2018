import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttendingComponent } from './attending/attending.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'attending', component: AttendingComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'registration', component: RegistraionComponent  },
  { path: 'team', component: TeamComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'contact', component: ContactComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttendingComponent,
    SessionsComponent,
    SpeakersComponent,
    RegistraionComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
