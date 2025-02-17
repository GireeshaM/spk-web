import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkEngineeringComponent } from './network-engineering.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';

describe('NetworkEngineeringComponent', () => {
  let component: NetworkEngineeringComponent;
  let fixture: ComponentFixture<NetworkEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NetworkEngineeringComponent,
        MainComponent,
        SoftwareServiceWorkFlowComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
