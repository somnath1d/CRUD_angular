import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students : Student[] = [
    {id : 1, name :"john"},
    {id : 2, name : "jane"},
    {id : 3, name : "dow"}
  ];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  addStudents(newStudent : Student) : void {
    this.students.push(newStudent);
  }

  remove(student : Student) : void{
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}
