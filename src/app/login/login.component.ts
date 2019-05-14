import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

  var baseCred = btoa(this.loginForm.controls.username.value+':'+this.loginForm.controls.password.value);
  console.log('baseCred:: '+baseCred);
    if(baseCred == 'YWRtaW46cGFzc3dvcmQ='){
      window.localStorage.setItem('token', baseCred);
        this.router.navigate(['list-employee']);
      }else {
        this.invalidLogin = true;
        alert("Invalid credentials");
      }


  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
