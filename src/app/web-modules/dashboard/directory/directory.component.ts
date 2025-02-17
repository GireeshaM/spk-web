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
  }
}
