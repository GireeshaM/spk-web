import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityComponent } from './cyber-security.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';

describe('CyberSecurityComponent', () => {
  let component: CyberSecurityComponent;
  let fixture: ComponentFixture<CyberSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CyberSecurityComponent,
        MainComponent,
        SoftwareServiceWorkFlowComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CyberSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
