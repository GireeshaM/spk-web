import { Component } from '@angular/core';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent {
  // Leave counts (Max Y-axis value = 12)
  casualLeave = 5;
  sickLeave = 8;
  compOffLeave = 3;

  date: Date[] | undefined;

  leaveRecords = [
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },

    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },

    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },

    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },

    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },

    {
      typeOfLeave: 'Casual Leave',
      startDate: '01 Jan 2024',
      endDate: '03 Jan 2024',
      days: 2,
      appliedDate: '31 Dec 2023',
      status: 'Approved',
    },
  ];

  // Y-axis labels from 1 to 12
  yAxisLabels = Array.from({ length: 12 }, (_, i) => 12 - i);

  currentPage = 1;
  recordsPerPage = 5;

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    return this.leaveRecords.slice(
      startIndex,
      startIndex + this.recordsPerPage
    );
  }

  totalPages() {
    return Math.ceil(this.leaveRecords.length / this.recordsPerPage);
  }

  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.totalPages()) {
      this.currentPage = newPage;
    }
  }
}
