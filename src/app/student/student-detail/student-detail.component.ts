import { Component, OnInit, Input } from '@angular/core';

import {Student} from '../student';
import {StuServeService} from 'src/app/stu-serve.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { pipe } from '@angular/core/src/render3';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public errorMsg = '';
  students: Student[];
  obj : Student;

  constructor(private route: ActivatedRoute,
    private studentService: StuServeService,
    private location: Location ) { }

  ngOnInit() {
      this.getStudent();
  }
  
  getStudent(){
    this.studentService.getStudents()    
      .subscribe(student => {this.students = student
                
        const id = +this.route.snapshot.paramMap.get('id');
        let ob = this.students.find(objt => objt.id == id);
        return this.obj = ob;
      },     
      error => this.errorMsg = error       
      )
  }

  goBack(): void {
    this.location.back();
  }

  }
  

