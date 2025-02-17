import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { LinkServiceService } from '../service/link-service.service';
import { Router } from '@angular/router';
import { UserData } from '../service/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private linkService: LinkServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      agree: [false, Validators.requiredTrue], // Checkbox must be checked
    });
  }

  // Getter for easy access in template
  get controls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.linkService.login(username, password).subscribe({
        next: (response: any) => {
          console.log('Login Response:', response);

          // Map the response data to fit the UserData structure
          const employeeData: UserData = {
            employee_id: response.employee_id, // Make sure the field names match
            full_name: response.full_name,
            email: response.email,
            token: response.token || '', // Provide default values if missing
            designation: response.designation || 'Not Assigned',
            message: response.message,
            reporting_manager: response.reporting_manager || 'Unknown',
            department: response.department,
            location: response.location,
            mobile_number: response.mobile_number,
            date_of_birth: response.date_of_birth,
            blood_group: response.blood_group,
          };

          // Pass the employee data in an array (because it's expected to be an array)
          this.linkService.updateEmployeeData([employeeData]);
          this.router.navigate(['/employeeDashboard']);
        },
        error: (err) => {
          console.error('Login Error:', err);
        },
      });
    }
  }
}
