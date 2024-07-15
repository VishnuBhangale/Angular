import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoading = false
  isLoginMode = true
  error: string = ""
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  nSwitchMode() 
  {

    this.isLoginMode = !this.isLoginMode

  }
  onSubmit(form: NgForm){
    if(!form.valid) 
      return
    const email = form.value.email


    const password = form.value.password


   this.isLoading = true
   if(this.isLoginMode)
    {
      
    }


    


  }

}


 


    
      


