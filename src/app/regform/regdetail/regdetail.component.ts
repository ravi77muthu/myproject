import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrolmentService } from 'src/app/enrolment.service';

@Component({
  selector: 'app-regdetail',
  templateUrl: './regdetail.component.html',
  styleUrls: ['./regdetail.component.css']
})
export class RegdetailComponent implements OnInit {



  topics = ['Tamil', 'English','Hindi' ];
  public topicHasError = true;
  public submited = false;
  errorMsg='';

  userModel = new User('Ravi', 'Kumar', 'mtrkumar@gmail.com', 9445239058, 'default', 'morning', false );

  constructor(private _enrollmentService:EnrolmentService) { }

  ngOnInit() {
  }

  validateTopic(value:string){
    if(value === 'default'){
      this.topicHasError= true;
    }
    else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.submited = true;
    this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Sucess Data!', data),
          error => this.errorMsg = error.statusText        )
  }
}
