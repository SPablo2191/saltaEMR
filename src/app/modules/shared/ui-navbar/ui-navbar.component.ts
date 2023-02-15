import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss']
})
export class UiNavbarComponent {
  protected isVisible : boolean = false;
  _hideSidebar(){
    this.isVisible = false;
  }
}
