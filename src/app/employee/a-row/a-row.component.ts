import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[myTd]',
  templateUrl: './a-row.component.html',
  styleUrls: ['./a-row.component.sass']
})
export class ARowComponent implements OnInit {
  @Input() employee: any;

  constructor() { }

  ngOnInit(): void {
  }

}
