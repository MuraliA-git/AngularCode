import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes,ROUTES} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeService } from './employee/employee.service';
import { FormsModule } from '@angular/forms';
import { SaveemployeeComponent } from './employee/saveemployee/saveemployee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewComponent } from './employee/view/view.component';
const appRoutes:Routes=[

  {path: 'List',component: EmployeeComponent},
  {path: 'Create',component: SaveemployeeComponent},
{path:'View',component:ViewComponent},
  {path: '',redirectTo: '/List',pathMatch:'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SaveemployeeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
