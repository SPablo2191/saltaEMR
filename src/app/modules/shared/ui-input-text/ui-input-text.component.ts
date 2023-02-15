import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-input-text',
  templateUrl: './ui-input-text.component.html',
  styleUrls: ['./ui-input-text.component.scss']
})
export class UiInputTextComponent {
  @Input() group!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() submitted: boolean = false;
  @Input() customClass! : string;
  @Input() readonly: boolean = false;
}
