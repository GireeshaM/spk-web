import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareServiceWorkFlowComponent } from './software-service-work-flow.component';

describe('SoftwareServiceWorkFlowComponent', () => {
  let component: SoftwareServiceWorkFlowComponent;
  let fixture: ComponentFixture<SoftwareServiceWorkFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareServiceWorkFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareServiceWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
