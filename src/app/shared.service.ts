import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5299/api";
  readonly PhotoUrl = "http://localhost:5299/Photos/";

  constructor(private http: HttpClient) { }


  getDepList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department' , val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department' , val)
  }

  deleteDepartment(departmentId: any){
    return this.http.delete(this.APIUrl+'/Department/' +departmentId )
  }


  getEmpList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee' , val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee' , val)
  }

  deleteEmployee(employeeId:any){
    return this.http.delete(this.APIUrl+'/Employee/' + employeeId)
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile', val)
  }

  getAllDepartmentNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }
  getAllDepartmentIds(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentIds');
  }
  getEmployeesByDepartmentId(departmentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/Employee/GetByDepartment/${departmentId}`);
  }
}