import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUseNameandPasword(uname: any, password: any) {

    if (uname == 'admin' && password == 'codemind1234567') {
      localStorage.setItem('token','admin');    
      return true;
    } else {
      return false;
    }
  }
}
