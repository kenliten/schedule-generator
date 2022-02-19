import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Grade } from '../grade';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  grades: Grade[] = this.gradeService.getGrades();

  teacherForm = this.fb.group({
    name: '',
  })

  @Output() create = new EventEmitter ();
  constructor(
    private teacherService: TeacherService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    if (this.teacherForm.valid) {
      const teacher: Teacher = {
        name: this.teacherForm.value.name,
        grades: [],
        subjects: [],
        hoursByWeek: 40
      };
      this.teacherService.addTeacher(teacher);
      this.teacherForm.reset();
      this.create.emit();
    }
  }

}
