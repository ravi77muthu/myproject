import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StuServeService} from '../../stu-serve.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  students: Student[];
  public errorMsg = '';

  
  constructor(private studentService: StuServeService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents():void{
    this.studentService.getStudents()    
      .subscribe(students => this.students = students,
                error => this.errorMsg = error
                );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addStudent({name} as Student)
      .subscribe(stu => {
        this.students.push(stu);
      });
  }


}
