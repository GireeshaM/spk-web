import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAssessComponent } from './it-assess.component';
import { MainComponent } from '../../utilities/main/main.component';
import { ItCommonComponent } from '../it-common/it-common.component';

describe('ItAssessComponent', () => {
  let component: ItAssessComponent;
  let fixture: ComponentFixture<ItAssessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItAssessComponent, MainComponent, ItCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
