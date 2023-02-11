import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-crud-table',
  templateUrl: './ui-crud-table.component.html',
  styleUrls: ['./ui-crud-table.component.scss']
})
export class UiCrudTableComponent implements OnInit {
  ngOnInit(): void {
    console.table(this.cols);
    // console.table(this.items);
  }
  @Input() cols : any [] = [];
  @Input() items : any [] = [];
}
