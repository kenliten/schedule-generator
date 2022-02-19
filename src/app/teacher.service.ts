import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teachers: Teacher[] = [];

  constructor() {
    this.load();
  }

  addTeacher (teacher: Teacher) {
    this.teachers.push(teacher);
    this.save();
  }

  getTeachers () {
    return this.teachers;
  }

  getTeacher (pos: number){ 
    return this.teachers[pos];
  }

  deleteTeacher (pos: number) {
    const t = this.teachers.splice(pos);
    this.save();
    return t;
  }

  updateTeacher (pos: number, teacher: Teacher) {
    this.teachers[pos] = teacher;
    this.save();
  }

  private save() {
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  private load() {
    const source = localStorage.getItem('teachers');
    if (typeof source === 'string') {
      this.teachers = JSON.parse(source);
    } else {
      this.teachers = [];
    }
  }
}
