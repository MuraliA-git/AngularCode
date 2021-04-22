import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Notice } from '../notice';
import { NoticeserviceService } from './noticeservice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @ViewChild('not',{static:false}) ele!: ElementRef;
  ngAfterViewInit(): void {
    console.log("viewchild"+this.ele);
      }
notice:Notice[]=[];
  constructor(private service:NoticeserviceService) { }

  ngOnInit(): void {
    this.service.getNotices().subscribe((data:Notice[])=>{
      this.notice=data;
      console.log(this.notice)
    });

  }
  downloadPdf():void{
  console.log(this.ele)
  
    let pdf=new jsPDF('p','pt','a5');
    
    pdf.html(this.ele.nativeElement,{
      callback:(pdf)=>{ pdf.save("angular.pdf");}
    });
   
  }
}
