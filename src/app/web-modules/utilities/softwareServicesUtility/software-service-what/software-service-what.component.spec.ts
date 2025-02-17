import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareServiceWhatComponent } from './software-service-what.component';

describe('SoftwareServiceWhatComponent', () => {
  let component: SoftwareServiceWhatComponent;
  let fixture: ComponentFixture<SoftwareServiceWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareServiceWhatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareServiceWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
