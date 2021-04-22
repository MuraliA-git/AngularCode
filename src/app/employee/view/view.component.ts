import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../saveemployee/employee';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service: EmployeeService) { }
  emp:IEmployee=new IEmployee();
id:Number=this.route.snapshot.params['id'];
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.service.getEmploy(this.id).subscribe(data=>{
      this.emp=data;
      console.log(this.emp)
    });
  }
  update():void
  {
    console.log(this.emp)
this.service.update(this.emp).subscribe();
  }
}
