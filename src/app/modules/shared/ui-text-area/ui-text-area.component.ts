import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-text-area',
  templateUrl: './ui-text-area.component.html',
  styleUrls: ['./ui-text-area.component.css']
})
export class UiTextAreaComponent {
  @Input() label! : string;
  @Input() title! : string;
  @Input() group!: FormGroup;
  @Input() name!: string;
}
