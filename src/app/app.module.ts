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
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './home/notice/notice.component';
import { CreateComponent } from './home/notice/create/create.component';
import { AuthGuard } from './auth.guard';
import { NoticeserviceService } from './home/notice/noticeservice.service';
import { AdminGuard } from './guard/admin.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import {ReactiveFormsModule} from '@angular/forms'
const appRoutes:Routes=[

  {path: 'List',component: EmployeeComponent,canActivate:[AuthGuard]},
  {path: 'Create',component: SaveemployeeComponent,canDeactivate:[UnsavedGuard]},
{path:'View/:id',component:ViewComponent},
{path:'Search',component:SearchEmployeeComponent},
{path:'Home',component:HomeComponent, children:[
  {path:'Notice',component:NoticeComponent},
  {path:'Create',component:CreateComponent},
  {path:'',redirectTo:'Notice',pathMatch:'full'}

]},
  {path: '',redirectTo: 'Home',pathMatch:'full'}


];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SaveemployeeComponent,
    ViewComponent,
    SearchEmployeeComponent,
    FooterComponent,
    HomeComponent,
    NoticeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,AuthGuard,NoticeserviceService,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
