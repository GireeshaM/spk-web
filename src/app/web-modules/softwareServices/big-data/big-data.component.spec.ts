import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataComponent } from './big-data.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';

describe('BigDataComponent', () => {
  let component: BigDataComponent;
  let fixture: ComponentFixture<BigDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BigDataComponent,
        MainComponent,
        SoftwareServiceWorkFlowComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
