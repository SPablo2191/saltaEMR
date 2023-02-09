import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-home-button',
  templateUrl: './ui-home-button.component.html',
  styleUrls: ['./ui-home-button.component.scss'],
})
export class UiHomeButtonComponent implements OnInit {
  @Input() routerLink!: string;
  @Input() icon!: string;
  @Input() label!: string;
  ngOnInit(): void {
    console.log(this.icon,this.label);
  }
}
