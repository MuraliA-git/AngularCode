import { Component, ElementRef, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { EmployeeService } from './employee.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,AfterViewInit {

  public employee :any[]=[];

  date:Date=new Date();
 
  constructor(private employeeservice:EmployeeService) { }
 

  ngOnInit(): void {
    console.log('new angular started')
    this.employeeservice.getEmployees().subscribe(data =>
      this.employee=data
    )
    
  }
  @ViewChild("text") test!:ElementRef;
  ngAfterViewInit(): void {
    console.log("viewchild"+this.test.nativeElement.value);
      }
  exportToExcel():any{
    let filename='ExportedData';
let ele=document.getElementById('export-table');
const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(ele);
const wb:XLSX.WorkBook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
XLSX.writeFile(wb,filename);
  }

  
exportAsPDF()
{
    
}
}


