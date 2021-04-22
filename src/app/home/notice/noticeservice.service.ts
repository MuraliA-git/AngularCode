import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable, Observer } from 'rxjs';
import { Notice } from '../notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeserviceService {
  saveNotice(notice: Notice):Observable<any> {
    return this._http.post<any>("http://localhost:3000/notice",notice);
  }
  getNotices():Observable<Notice[]> {
    return this._http.get<Notice[]>("http://localhost:3000/notice");
  }

  constructor(private _http:HttpClient) { }
}
