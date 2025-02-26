import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { LinkServiceService } from 'src/app/service/link-service.service';
import { DayEntry } from 'src/app/service/modal';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  isClockedIn = false;
  clockInTime: string = '';
  userIP: string = 'Fetching...';
  logs: {
    date: string;
    loginTime: string;
    logoutTime: string | null;
    ipAddress: string;
  }[] = [];
  userLocation: { lat: number; lon: number } | null = null;

  constructor(
    private http: HttpClient,
    private linkService: LinkServiceService
  ) {}

  ngOnInit() {
    this.getIPAddress();
    this.generateMonthlyCalendar(this.selectedMonth);
  }

  clockInWithLocation() {
    this.getLocation();
    this.clockIn();
  }

  clockIn() {
    if (!this.isClockedIn) {
      const now = new Date();
      this.clockInTime = now.toLocaleTimeString();
      this.isClockedIn = true;

      this.logs.unshift({
        date: now.toLocaleDateString(),
        loginTime: this.clockInTime,
        logoutTime: null,
        ipAddress: this.userIP,
      });
    }
  }

  clockOut(index: number) {
    const now = new Date();
    this.logs[index].logoutTime = now.toLocaleTimeString();
    this.isClockedIn = false;
  }

  getIPAddress() {
    this.http
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .subscribe(
        (response) => {
          this.userIP = response.ip;
        },
        (error) => {
          console.error('Error fetching IP:', error);
          this.userIP = 'Unavailable';
        }
      );
  }
  getLocation() {
    if (this.isClockedIn) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          this.clockIn();
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Location access denied. Please allow location access.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  selectedMonth: Date = new Date();
  daysOfMonth: DayEntry[] = [];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedDay: any = {
    date: new Date(),
    hours: 0,
    projectDetails: '',
    leaveReason: '',
    status: '',
  };

  autoFill = false;

  generateMonthlyCalendar(date: Date): void {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    this.daysOfMonth = [];

    // Fill empty slots for the first row before the 1st day
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.daysOfMonth.push({
        date: new Date(0),
        hours: 0,
        projectDetails: '',
        leaveReason: '',
        status: '',
        disabled: true,
      });
    }

    // Fill actual days
    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(year, month, day);
      const isDisabled =
        currentDate.getMonth() !== today.getMonth() ||
        currentDate.getFullYear() !== today.getFullYear();

      this.daysOfMonth.push({
        date: currentDate,
        hours: 0,
        projectDetails: '',
        leaveReason: '',
        status: '❌ Not Filled',
        disabled: isDisabled,
      });
    }
  }

  updateHours(day: DayEntry): void {
    if (day.hours >= 8) {
      day.status = '✅ Green'; // Fully filled
    } else if (day.hours > 0) {
      day.status = '🟡 Yellow'; // Partially filled
    } else {
      day.status = '❌ Not Filled'; // Not filled
    }
  }

  previousMonth(): void {
    this.selectedMonth = new Date(
      this.selectedMonth.getFullYear(),
      this.selectedMonth.getMonth() - 1,
      1
    );
    this.generateMonthlyCalendar(this.selectedMonth);
  }

  nextMonth(): void {
    this.selectedMonth = new Date(
      this.selectedMonth.getFullYear(),
      this.selectedMonth.getMonth() + 1,
      1
    );
    this.generateMonthlyCalendar(this.selectedMonth);
  }

  getColor(status: string): string {
    switch (status) {
      case '✅ Green':
        return 'green';
      case '❌ Not Filled':
        return 'red';
      case '🟡 Yellow':
        return 'orange';
      default:
        return 'black';
    }
  }

  openModal(day: any) {
    if (!day || !day.date) {
      console.error('Invalid day object:', day);
      return;
    }
    this.selectedDay = { ...day }; // Clone the object
  }

  closeModal() {
    (document.getElementById('timeSheetModal') as any)?.classList.remove(
      'show'
    );
    (document.getElementById('timeSheetModal') as any)?.style.setProperty(
      'display',
      'none'
    );
    document.body.classList.remove('modal-open');
  }

  saveDetails() {
    if (this.autoFill) {
      this.daysOfMonth.forEach((d) => {
        if (d.date.getDay() === this.selectedDay.date.getDay()) {
          d.hours = this.selectedDay.hours;
          d.projectDetails = this.selectedDay.projectDetails;
          d.leaveReason = this.selectedDay.leaveReason;
        }
      });
    } else {
      const index = this.daysOfMonth.findIndex(
        (d) => d.date.getTime() === this.selectedDay.date.getTime()
      );
      if (index !== -1) {
        this.daysOfMonth[index] = { ...this.selectedDay };
      }
    }
    this.updateHours(this.selectedDay);
    this.closeModal();
  }
}
