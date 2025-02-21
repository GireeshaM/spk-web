// export interface User {
//     token?: string;
//     username?: string;
//     authorities?: [];
//     user?: UserData;
// }
export interface UserData {
  employee_id: number | null;
  full_name: string;
  email: string;
  designation: string | null;
  message: string;
  reporting_manager: string;
  mobile_number: string;
  department: string;
  location: string;
  token: string;
  blood_group: string;
  date_of_birth: string;
}
export interface AllEmployee {
  reporting_manager: string;
  employee_id: number | null;
  full_name: string;
  email: string;
  designation: string | null;
  department: string;
}
export interface LeaveData {
  typeOfLeave: string;
  startDate: string;
  endDate: string;
  days: number;
  appliedDate: string;
  status: string;
}
