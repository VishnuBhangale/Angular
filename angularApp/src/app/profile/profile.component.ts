import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({

  selector: 'app-profile',

  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.css']

})

export class ProfileComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit() {

    this.authService.getUser().subscribe((user) => {

      this.user = user;

    });

  }

  logout() {

    this.authService.signOut().then(() => {

      console.log('Successfully logged out');

      this._router.navigate(['/auth']);

    });

  }

}