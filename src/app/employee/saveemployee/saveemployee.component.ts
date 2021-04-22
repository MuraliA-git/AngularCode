import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {FormControl} from '@angular/forms'
import { EmployeeComponent } from '../employee.component';
import { EmployeeService } from '../employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-saveemployee',
  templateUrl: './saveemployee.component.html',
})
export class SaveemployeeComponent implements OnInit,AfterViewInit {
  formcontrol:FormControl=new FormControl();
  ListEnable :boolean=false;
empid:String='';
empname:String='';
designation:String='ITA';
Tech:String='Angular'
 isHidden:boolean=false;
EmployeeDetails=new IEmployee();
  constructor(private service:EmployeeService) { }
  ngAfterViewInit(): void {
    console.log(this.date.date);
  }

  ngOnInit(): void {
  }

  employees=
    {
      id: this.empid,
      name:this.empname,
      designation:this.designation,
      Tech:this.Tech
    
    
    }


@ViewChild(EmployeeComponent) date!:EmployeeComponent;
  saveEmployees():void
  {
let saveObj=JSON.parse(JSON.stringify(this.EmployeeDetails))
 this.service.save(saveObj).subscribe((data:any)=>{console.log("data saved "+data.stringify)});
  }
  delete():void
  {
   
this.service.delete(this.EmployeeDetails.id).subscribe(()=>console.log('deleted user  successfully'+this.EmployeeDetails.id));
  }

  update():void
  {
    let dataobj=JSON.parse(JSON.stringify(this.EmployeeDetails))
    this.service.update(dataobj).subscribe(data=>{
      console.log(data);
    });
  }
}
