import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrl: './add-edit-dep.component.css'
})
export class AddEditDepComponent implements OnInit{

  constructor(private service: SharedService){}

  @Input() dep:any;
  DepartmentId?:string;
  DepartmentName?:string;
  Sigla?:string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
    this.Sigla=this.dep.Sigla;
    
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName,
              Sigla:this.Sigla};
                this.service.addDepartment(val).subscribe(res => {
                  alert(res.toString());
                });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName,
    Sigla:this.Sigla};
      this.service.updateDepartment(val).subscribe(res => {
        alert(res.toString());
      });

  }
}