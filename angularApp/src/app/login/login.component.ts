import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // inject the AuthService 
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  checkuser(uname: any, password: any) {

    console.log(uname, password);

   var output = this._authService.checkUseNameandPasword(uname, password);

   if (output == true) {
    window.alert('Login successfully....!')

    // redirect to home route .
    this._router.navigate(['homenew']);


   } else {
    window.alert('Invalid username and password');
   }
    
  }

}
