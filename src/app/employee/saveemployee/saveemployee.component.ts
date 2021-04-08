import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from './employee';

@Component({
  selector: 'app-saveemployee',
  templateUrl: './saveemployee.component.html',
})
export class SaveemployeeComponent implements OnInit {
empid:String='';
empname:String='';
designation:String='ITA';
Tech:String='Angular'

EmployeeDetails=new IEmployee();
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployees(employeeForm:NgForm):void
  {
console.log(this.EmployeeDetails);

  }
}
