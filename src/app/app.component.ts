import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  students: Student[] = [];
  search : string = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  Filter(): Student[] {
    return this.students.filter(student => student.name.includes(this.search));
  }

  newStudent : Student = {id:0,name:''}; //= {id:this.new_id,name:this.new_name};

  Addstudent(): void {
    // console.log(this.new_id,this.new_name);
    console.log(this.newStudent);
    this.studentService.addStudents(this.newStudent);
  }

  Delete(student: Student): void{
    this.studentService.remove(student);
  }
  
  title = 'bookingapp';
}
