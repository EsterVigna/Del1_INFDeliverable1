import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';


@Injectable()

export class AuthService {

  constructor( private http: HttpClient) { }
  getUserDetails(username, password) {
    // post details to http server return user info if correct
    return this.http.post('/api/auth.php', {
     username,
     password
    });
  }
}
