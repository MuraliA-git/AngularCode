import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeComponent } from '../employee.component';
import { IEmployee } from './employee';

@Component({
  selector: 'app-saveemployee',
  templateUrl: './saveemployee.component.html',
})
export class SaveemployeeComponent implements OnInit,AfterViewInit {
empid:String='';
empname:String='';
designation:String='ITA';
Tech:String='Angular'

EmployeeDetails=new IEmployee();
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.date.date);
  }

  ngOnInit(): void {
  }
@ViewChild(EmployeeComponent) date!:EmployeeComponent;
  saveEmployees(employeeForm:NgForm):void
  {
console.log(this.EmployeeDetails);
console.log(employeeForm)

  }
}
