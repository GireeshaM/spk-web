import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LinkServiceService } from 'src/app/service/link-service.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent {
  date: Date[] | undefined;
  public leaveForm!: FormGroup;
  private subscription!: Subscription;

  constructor(private formBuilder: FormBuilder) {}
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
      status: 'Cancelled',
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
      status: 'Cancelled',
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
  ngOnInit(): void {
    this.leaveForm = this.formBuilder.group({
      typeOfLeave: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  currentPage = 1;
  recordsPerPage = 5;

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    return this.leaveRecords.slice(
      startIndex,
      startIndex + this.recordsPerPage
    );
  }

  public totalPages() {
    return Math.ceil(this.leaveRecords.length / this.recordsPerPage);
  }

  public changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.totalPages()) {
      this.currentPage = newPage;
    }
  }

  public isFieldInvalid(field: string): boolean {
    return (
      this.leaveForm.controls[field].invalid &&
      (this.leaveForm.controls[field].dirty ||
        this.leaveForm.controls[field].touched)
    );
  }
  onSubmit(): void {
    if (this.leaveForm.valid) {
      console.log('Leave Form Data:', this.leaveForm.value);
      alert('Leave applied successfully!');
    }
  }
}
