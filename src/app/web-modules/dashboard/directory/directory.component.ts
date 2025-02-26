import { Component, OnInit } from '@angular/core';
import { LinkServiceService } from 'src/app/service/link-service.service';
import { AllEmployee } from 'src/app/service/modal';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  employeeData: AllEmployee[] = [];

  constructor(private linkService: LinkServiceService) {}

  ngOnInit(): void {
    this.linkService.getAllEmployees().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.employeeData = response.employees;
      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      },
    });
    this.departments = [
      ...new Set(this.employeeData.map((emp) => emp.department)),
    ]; // Get unique departments
  }
  departments: string[] = [];
  selectedDepartment: string = '';
  filteredEmployees = [...this.employeeData];

  filterByDepartment(department: string) {
    this.selectedDepartment = department;
    this.filteredEmployees = department
      ? this.employeeData.filter((emp) => emp.department === department)
      : [...this.employeeData];
  }
}
