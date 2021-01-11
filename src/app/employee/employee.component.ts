import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  employees = [
    { 
      Employee: { name: "Ahmad", age: '33', email: "example1@example.com", mobile: '+970564224899' }
    },
    {
      Employee: { name: "Ali", age: '22', email: "example2@example.com", company: "Facebook", mobile: '+972564244878' }
    },
    {
      Employee: { name: "Mohammad", age: '31', email: "example3@example.com", company: "Nvidia" }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
