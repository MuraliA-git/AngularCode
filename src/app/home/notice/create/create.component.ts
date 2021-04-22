import { Component, OnInit } from '@angular/core';
import { Notice } from '../../notice';
import { NoticeComponent } from '../notice.component';
import { NoticeserviceService } from '../noticeservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  notice=new Notice();
  constructor(private service:NoticeserviceService) { 


  }

  ngOnInit(): void {
  }
  
saveNotice():void{
  this.service.saveNotice(this.notice).subscribe((data:any)=>{
    console.log(data);
  });
}
}
