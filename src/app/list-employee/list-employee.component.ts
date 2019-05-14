import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../model/employee.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.apiService.getEmployees()
      .subscribe( data => {
          this.employees = data;
          console.log(data);
      });
  }


  addEmployee(): void {
    this.router.navigate(['add-employee']);
  };
}
