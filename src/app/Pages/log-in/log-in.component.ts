import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogINComponent implements OnInit {
  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        // redirect the person to /admin

      } else {
        window.alert(data.message);
      }
    });

    console.log(username, password);
  }
}
