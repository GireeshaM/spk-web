import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareComponent } from './health-care.component';
import { SectionComponent } from '../../utilities/industryUtility/section/section.component';

describe('HealthCareComponent', () => {
  let component: HealthCareComponent;
  let fixture: ComponentFixture<HealthCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCareComponent, SectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
