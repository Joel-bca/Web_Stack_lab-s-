import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registrations: any[] = [];
  editId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private regService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      regNo: ['', Validators.required],
      department: ['', Validators.required],
      event: ['', Validators.required]
    });

    this.loadData();
  }

  // LOAD DATA
  loadData() {
    this.regService.getRegistrations().subscribe(res => {
      this.registrations = res;
    });
  }

  // SUBMIT (Create or Update)
  submit() {
    if (this.registerForm.invalid) return;

    if (this.editId) {
      this.regService.updateRegistration(this.editId, this.registerForm.value).then(() => {
        this.loadData();
        this.editId = null;
      });
    } else {
      this.regService.addRegistration(this.registerForm.value).then(() => {
        this.loadData();
      });
    }

    this.registerForm.reset();
  }

  // EDIT
  edit(reg: any) {
    this.registerForm.patchValue(reg);
    this.editId = reg.id;
  }

  // DELETE
  delete(id: string) {
    this.regService.deleteRegistration(id).then(() => {
      this.loadData();
    });
  }
}
