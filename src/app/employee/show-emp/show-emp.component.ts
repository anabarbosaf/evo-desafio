import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrl: './show-emp.component.css'
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService){

  }

  EmployeeList:any=[];
  ModalTitle?:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;


  DepartmentNameFilter:string ="";
  DepartmentListWithoutFilter!: any[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){

    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DepartmentId:"",
      Rg:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item:any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;

  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList=data;
      this.DepartmentListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.EmployeeList = this.DepartmentListWithoutFilter.filter(function (el){
      return  el.Department.toString().toLowerCase().includes(
        DepartmentNameFilter.toString().trim().toLowerCase()
      )

    });
  }
}
