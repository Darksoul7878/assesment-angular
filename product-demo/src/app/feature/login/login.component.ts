import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  model: any = {};

  onSubmit() {
    localStorage.setItem('LogindataSource', JSON.stringify(this.model));
    setTimeout(() => {
      this.router.navigate(['/directory']);
    }, 2000);
  }
  ngOnInit(): void {}
}
