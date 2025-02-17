import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceServicesComponent } from './salesforce-services.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';

describe('SalesforceServicesComponent', () => {
  let component: SalesforceServicesComponent;
  let fixture: ComponentFixture<SalesforceServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SalesforceServicesComponent,
        MainComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
        SoftwareServiceWorkFlowComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesforceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
