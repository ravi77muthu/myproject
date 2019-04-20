import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm;
  constructor(private fb:FormBuilder, private authService:AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userName:['', Validators.required],
        passWord:['',Validators.required]
      }
    );
  this.authService.logout();

  }

}
