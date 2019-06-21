import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public prompt: string = "";
  public condition: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  signIn(value) {
    this.prompt = "Welcome loser... I mean " + value;
    this.condition = true;
  }

}
