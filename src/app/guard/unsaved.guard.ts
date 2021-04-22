import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SaveemployeeComponent } from '../employee/saveemployee/saveemployee.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SaveemployeeComponent> {
  canDeactivate(
    component: SaveemployeeComponent)
    {
      if(component.formcontrol.dirty){
        return window.confirm('Data Not Saved .');
        
      }
    return true;
  }
  
}
