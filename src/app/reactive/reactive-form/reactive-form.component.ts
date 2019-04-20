import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  get userName(){
    return this.registrationForm.get('username');
  }

  constructor(private fb:FormBuilder){}

  
   registrationForm = this.fb.group(
    {
      username:['', [Validators.required, Validators.minLength(10)]],
      password:['',Validators.required],
      conFirmPassword:['', Validators.required],
      address:this.fb.group(
        {
          city:['', Validators.required],
          state:['', Validators.required],
          postalcode:['', Validators.required]
        }
      )
    }
  )

  ngOnInit() {
  }
  loadAPIData(){
    this.registrationForm.patchValue(
      {
        username:'Kumar',
        password:'test',
        conFirmPassword:'test',
        address:{
          city:'Chennai',
          state:'Tamilnadu',
          postalcode:'609306'
        }
      }
    )
  }
}
