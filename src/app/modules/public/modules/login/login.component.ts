import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  load(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this._router.navigate(['home']);

    }, 1000);
  }
  constructor(private _router : Router){
  }
}
