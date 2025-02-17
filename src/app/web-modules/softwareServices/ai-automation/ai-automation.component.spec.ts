import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAutomationComponent } from './ai-automation.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';

describe('AiAutomationComponent', () => {
  let component: AiAutomationComponent;
  let fixture: ComponentFixture<AiAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AiAutomationComponent,
        MainComponent,
        SoftwareServiceWorkFlowComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AiAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
