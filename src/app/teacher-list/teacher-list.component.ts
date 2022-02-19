import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.teachers = this.teacherService.getTeachers();
  }

  deleteTeacher(i: number) {
    this.teacherService.deleteTeacher(i);
  }

  onInsert() {
    this.teachers = this.teacherService.getTeachers();
  }

}
