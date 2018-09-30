import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  tab:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  showSchedule(){
    this.tab = !this.tab;
  }

}
