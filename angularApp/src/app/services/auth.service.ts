import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

 

signUp(email: string, password: string){

 return this.afAuth.createUserWithEmailAndPassword(email, password);

}

signIn(email: string, password: string) {

  return this.afAuth.signInWithEmailAndPassword(email, password);

}

signOut() {

  return this.afAuth.signOut();

}

signInWithGoogle() {

  return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

}

getUser() {

  return this.afAuth.authState;

}

  checkUseNameandPasword(uname: any, password: any) {

    if (uname == 'admin' && password == 'codemind1234567') {

      localStorage.setItem('token', 'admin');

      return true;

    } else {

      return false;

    }

  }

}