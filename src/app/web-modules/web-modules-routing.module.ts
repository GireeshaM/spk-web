import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItConsultComponent } from './itConsulting/it-consult/it-consult.component';
import { ItInfraComponent } from './itConsulting/it-infra/it-infra.component';
import { ItAssessComponent } from './itConsulting/it-assess/it-assess.component';
import { ItDesignComponent } from './itConsulting/it-design/it-design.component';
import { StaffingComponent } from './staffing/staffing.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { SoftwareMainComponent } from './softwareServices/software-main/software-main.component';
import { SalesforceServicesComponent } from './softwareServices/salesforce-services/salesforce-services.component';
import { CyberSecurityComponent } from './softwareServices/cyber-security/cyber-security.component';
import { AiAutomationComponent } from './softwareServices/ai-automation/ai-automation.component';
import { ItTeleComponent } from './industries/it-tele/it-tele.component';
import { GovtComponent } from './industries/govt/govt.component';
import { HealthCareComponent } from './industries/health-care/health-care.component';
import { BankingComponent } from './industries/banking/banking.component';
import { ManufacturingComponent } from './industries/manufacturing/manufacturing.component';
import { EducationComponent } from './industries/education/education.component';
import { TransportationComponent } from './industries/transportation/transportation.component';
import { NetworkEngineeringComponent } from './softwareServices/network-engineering/network-engineering.component';
import { DataAnalyticsComponent } from './softwareServices/data-analytics/data-analytics.component';
import { BigDataComponent } from './softwareServices/big-data/big-data.component';
import { JavaComponent } from './softwareServices/java/java.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '../login/login.component';
import { CompanyProfileComponent } from './dashboard/company-profile/company-profile.component';
import { DirectoryComponent } from './dashboard/directory/directory.component';
import { PayrollComponent } from './dashboard/payroll/payroll.component';
import { LeavesComponent } from './dashboard/leaves/leaves.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';

const routes: Routes = [
  { path: '', component: ItConsultComponent },
  { path: 'itConsulting', component: ItConsultComponent },
  {
    path: 'it-consulting',
    component: ItConsultComponent,
  },
  {
    path: 'it-infra',
    component: ItInfraComponent,
  },
  {
    path: 'it-assess',
    component: ItAssessComponent,
  },
  {
    path: 'it-design',
    component: ItDesignComponent,
  },
  {
    path: 'staffingSolutions',
    component: StaffingComponent,
  },
  {
    path: 'projectManagement',
    component: ProjectManagementComponent,
  },
  {
    path: 'softwareServices',
    component: SoftwareMainComponent,
  },
  {
    path: 'salesforceServices',
    component: SalesforceServicesComponent,
  },
  {
    path: 'cyberSecurity',
    component: CyberSecurityComponent,
  },
  {
    path: 'aiAutomation',
    component: AiAutomationComponent,
  },
  {
    path: 'itTelecommunications',
    component: ItTeleComponent,
  },
  {
    path: 'government',
    component: GovtComponent,
  },
  {
    path: 'healthCareAndLifeSciences',
    component: HealthCareComponent,
  },
  {
    path: 'banking',
    component: BankingComponent,
  },
  {
    path: 'manufacturing',
    component: ManufacturingComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'transportationAndLogistics',
    component: TransportationComponent,
  },
  {
    path: 'networkEngineering',
    component: NetworkEngineeringComponent,
  },
  {
    path: 'dataAnalytics',
    component: DataAnalyticsComponent,
  },
  {
    path: 'bigData',
    component: BigDataComponent,
  },
  {
    path: 'java',
    component: JavaComponent,
  },
  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'companyProfile',
    component: CompanyProfileComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'directory',
    component: DirectoryComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'payroll',
    component: PayrollComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'leaves',
    component: LeavesComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
    data: { showHeader: false, showFooter: false, showChatBot: false },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebModuleRoutingModules {}
