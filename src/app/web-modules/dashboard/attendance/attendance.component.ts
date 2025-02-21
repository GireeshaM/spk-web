import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getIPAddress();
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
}
