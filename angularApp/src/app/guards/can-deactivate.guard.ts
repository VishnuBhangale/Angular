import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AdduserComponent } from '../adduser/adduser.component';



 

@Injectable({

  providedIn: 'root'

})

export class CanDeactivateGuard implements CanDeactivate<AdduserComponent> {

  canDeactivate(

    component: AdduserComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    

      if (component.userName.dirty) {

        return confirm('You have some undaved changes. Are you sure want to navigate?')

      } else {

        return true;

      }

 

  }

  

}
