import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes and Routing
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttendingComponent } from './attending/attending.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Firebase and Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyCaxS5PXtECI5mUdgRsdGzsvPDjX_SOC_g",
  authDomain: "fun-45.firebaseapp.com",
  databaseURL: "https://fun-45.firebaseio.com",
  projectId: "fun-45",
  storageBucket: "fun-45.appspot.com",
  messagingSenderId: "740914088501"
};

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
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
