import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingComponent } from './manufacturing.component';
import { SectionComponent } from '../../utilities/industryUtility/section/section.component';

describe('ManufacturingComponent', () => {
  let component: ManufacturingComponent;
  let fixture: ComponentFixture<ManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManufacturingComponent, SectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
