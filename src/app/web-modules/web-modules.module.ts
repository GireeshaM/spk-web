import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ItConsultComponent } from './itConsulting/it-consult/it-consult.component';
import { ItInfraComponent } from './itConsulting/it-infra/it-infra.component';
import { ItAssessComponent } from './itConsulting/it-assess/it-assess.component';
import { ItDesignComponent } from './itConsulting/it-design/it-design.component';
import { WebModuleRoutingModules } from '../web-modules/web-modules-routing.module';
import { ItCommonComponent } from './itConsulting/it-common/it-common.component';
import { WhyComponent } from './utilities/why/why.component';
import { WhatComponent } from './utilities/what/what.component';
import { WhyChooseUsComponent } from './utilities/why-choose-us/why-choose-us.component';
import { StaffingComponent } from './staffing/staffing.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { SoftwareMainComponent } from './softwareServices/software-main/software-main.component';
import { SalesforceServicesComponent } from './softwareServices/salesforce-services/salesforce-services.component';
import { CyberSecurityComponent } from './softwareServices/cyber-security/cyber-security.component';
import { AiAutomationComponent } from './softwareServices/ai-automation/ai-automation.component';
import { SoftwareServiceWhatComponent } from './utilities/softwareServicesUtility/software-service-what/software-service-what.component';
import { SoftwareServiceWorkFlowComponent } from './utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhyComponent } from './utilities/softwareServicesUtility/software-service-why/software-service-why.component';
import { MainComponent } from './utilities/main/main.component';
import { ItTeleComponent } from './industries/it-tele/it-tele.component';
import { GovtComponent } from './industries/govt/govt.component';
import { HealthCareComponent } from './industries/health-care/health-care.component';
import { BankingComponent } from './industries/banking/banking.component';
import { ManufacturingComponent } from './industries/manufacturing/manufacturing.component';
import { EducationComponent } from './industries/education/education.component';
import { TransportationComponent } from './industries/transportation/transportation.component';
import { SectionComponent } from './utilities/industryUtility/section/section.component';
import { NetworkEngineeringComponent } from './softwareServices/network-engineering/network-engineering.component';
import { DataAnalyticsComponent } from './softwareServices/data-analytics/data-analytics.component';
import { BigDataComponent } from './softwareServices/big-data/big-data.component';
import { JavaComponent } from './softwareServices/java/java.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ItConsultComponent,
    ItInfraComponent,
    ItAssessComponent,
    ItDesignComponent,
    ItCommonComponent,
    WhyComponent,
    WhatComponent,
    WhyChooseUsComponent,
    StaffingComponent,
    ProjectManagementComponent,
    SoftwareMainComponent,
    SalesforceServicesComponent,
    CyberSecurityComponent,
    AiAutomationComponent,
    SoftwareServiceWhatComponent,
    SoftwareServiceWorkFlowComponent,
    SoftwareServiceWhyComponent,
    MainComponent,
    ItTeleComponent,
    GovtComponent,
    HealthCareComponent,
    BankingComponent,
    ManufacturingComponent,
    EducationComponent,
    TransportationComponent,
    SectionComponent,
    NetworkEngineeringComponent,
    DataAnalyticsComponent,
    BigDataComponent,
    JavaComponent,
  ],
  imports: [
    CommonModule,
    WebModuleRoutingModules,
    CarouselModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
})
export class WebModulesModule {}
