import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API } from "../../app/app.api";

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
  }

  public getUsers(numberUsers: number = 0): Observable<string[]> {
    const urlApi = API + "?results=" + numberUsers;
    return this.http.get<string[]>(urlApi);
 }

}
