import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AllEmployee, UserData } from './modal';

@Injectable({
  providedIn: 'root',
})
export class LinkServiceService {
  private employeeDataSource = new BehaviorSubject<UserData[]>([]); // Initialize with an empty array
  currentEmployeeData = this.employeeDataSource.asObservable(); // Observable for employee data

  constructor(private http: HttpClient) {}

  getExternalContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }

  public login(username: string, password: string): Observable<UserData[]> {
    return this.http.post<UserData[]>(environment.users.signIn, {
      username,
      password,
    });
  }

  updateEmployeeData(data: UserData[]): void {
    console.log('Updating employee data:', data);
    this.employeeDataSource.next(data); // Emit the new array of UserData
  }

  getAllEmployees(): Observable<AllEmployee[]> {
    return this.http.get<AllEmployee[]>(environment.users.getAllEmployees);
  }
}
