import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersProvider } from "../../providers/users/users";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{

  private _users: string[];

  constructor(public navCtrl: NavController, private usersProvider: UsersProvider) {
  }

  ngOnInit() {
    this.usersProvider.getUsers(5).subscribe(response => this._users = response['results']);
  }

  public get users() {
    return this._users;
  }

}
