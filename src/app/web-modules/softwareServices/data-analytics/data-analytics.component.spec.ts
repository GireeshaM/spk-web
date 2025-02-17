import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsComponent } from './data-analytics.component';
import { SoftwareServiceWhyComponent } from '../../utilities/softwareServicesUtility/software-service-why/software-service-why.component';
import { MainComponent } from '../../utilities/main/main.component';
import { SoftwareServiceWorkFlowComponent } from '../../utilities/softwareServicesUtility/software-service-work-flow/software-service-work-flow.component';
import { SoftwareServiceWhatComponent } from '../../utilities/softwareServicesUtility/software-service-what/software-service-what.component';

describe('DataAnalyticsComponent', () => {
  let component: DataAnalyticsComponent;
  let fixture: ComponentFixture<DataAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DataAnalyticsComponent,
        MainComponent,
        SoftwareServiceWorkFlowComponent,
        SoftwareServiceWhatComponent,
        SoftwareServiceWhyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
