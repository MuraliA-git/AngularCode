import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {IEmployee} from "src/app/employee/employee"
import { Observable, throwError } from "rxjs";
import { catchError,map,mergeMap } from "rxjs/operators";


@Injectable()
export class EmployeeService
{
getEmploy(id:any)
{
return this.getData(id);
}
update(EmployeeDetails: any):Observable<IEmployee>  {
  console.log(EmployeeDetails)
  return this._http.put<IEmployee>(`http://localhost:3000/employees/${EmployeeDetails.id}`, EmployeeDetails);
}
getData(empid:String):Observable<any>
 {
     console.log("http://localhost:3000/employees/"+empid);
    return this._http.get<any>("http://localhost:3000/employees/"+empid);

}
delete(delObj: any):Observable<void> {
 return this._http.delete<void>('http://localhost:3000/employees/'+delObj)
}

constructor(private _http:HttpClient)
{

}
public save(saveObj: any):Observable<any> {
  return this._http.post('http://localhost:3000/employees/', saveObj);
}
public getEmployees():Observable<IEmployee[]>
{
    return this._http.get<IEmployee[]>("http://localhost:3000/employees");
}
}