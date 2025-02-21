import { Injectable } from '@angular/core';
import { UserData } from './modal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData = new BehaviorSubject<UserData | null>(null);
  userData$ = this.userData.asObservable(); // Expose as observable

  constructor() {
    this.loadStoredUserData();
  }

  // Store user data in localStorage and update the observable
  storeUserData(user: UserData) {
    localStorage.setItem('employeeData', JSON.stringify(user));
    this.userData.next(user);
  }

  // Load stored user data
  loadStoredUserData() {
    const storedData = localStorage.getItem('employeeData');
    if (storedData) {
      this.userData.next(JSON.parse(storedData));
    }
  }

  // Clear user data on logout
  logout() {
    localStorage.removeItem('employeeData');
    this.userData.next(null);
  }

  // Get the latest user data
  getUserData(): UserData | null {
    return this.userData.value;
  }
}
