import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {

  isRegistered : boolean = false;
  isFormFilled : boolean = false;
  isAuth : boolean = false;
  constructor(public af: AngularFireAuth,) {
    af.authState.subscribe(
      (user) => {
        if (user != null) {
          this.isAuth = true;
          console.log(user.email)
        }else{
          this.isAuth = false;
          console.log('logged out');
        }
      });
   }

  ngOnInit() {
  }

  login(){
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }
  logout(){
    this.af.auth.signOut();
  }
  register(form: NgForm){
    console.log(form)
  }
}
