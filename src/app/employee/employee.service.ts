import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {IEmployee} from "src/app/employee/employee"
import { Observable, throwError } from "rxjs";
import { catchError,map,mergeMap } from "rxjs/operators";


@Injectable()
export class EmployeeService
{
constructor(private _http:HttpClient)
{

}
public getEmployees():Observable<IEmployee[]>
{
    return this._http.get<IEmployee[]>("/assets/Data/data.json");
}
}