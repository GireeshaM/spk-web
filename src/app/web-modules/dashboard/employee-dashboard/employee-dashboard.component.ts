import { Component } from '@angular/core';
import { LinkServiceService } from 'src/app/service/link-service.service';
import { UserData } from 'src/app/service/modal';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent {
  currentTime = new Date();
  employeeData: UserData[] = [];

  constructor(private linkService: LinkServiceService) {}
  ngOnInit(): void {
    // Subscribe to the employee data stream (which is an array of UserData)
    this.linkService.currentEmployeeData.subscribe((data: UserData[]) => {
      console.log('Received Employee Data:', data);
      if (data && data.length > 0) {
        this.employeeData = data; // Set employeeData from the observable array
      }
    });
  }
}
