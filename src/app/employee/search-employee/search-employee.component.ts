import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../saveemployee/employee';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  empid: any;
  empList= 
    {
      id:'',
      name:''
    }

  isLoad:boolean=false;
  constructor(private employeeService:EmployeeService) { }
   employee!: IEmployee;
  ngOnInit(): void {
  }
  SearchData():void
  {
    
    this.employeeService.getData(this.empid).subscribe((data)=>{
this.empList=data;
console.log(this.empList)
this.isLoad=true;
});
  }

}
