import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {

  DepartmentId?: number;
  employeeList: any[] = [];
  EmployeeList:any=[];
  ModalTitle?:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;


  constructor(private route: ActivatedRoute, private service: SharedService) {}

  ngOnInit() {
    const departmentIdParam = this.route.snapshot.paramMap.get('departmentId');

    if (departmentIdParam !== null && departmentIdParam !== undefined) {
      this.DepartmentId = +departmentIdParam;

      this.loadEmployeeList();
    }
  }


  deleteClick(item: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe((data) => {
        alert(data.toString());
        this.loadEmployeeList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.loadEmployeeList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data => {
      this.employeeList=data;
  
    });
  }
  loadEmployeeList() {
    if (this.DepartmentId !== null && this.DepartmentId !== undefined) {
      this.service.getEmployeesByDepartmentId(this.DepartmentId).subscribe((data: any) => {
        this.employeeList = data;
      });
    }
  }
}
