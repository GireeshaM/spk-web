import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTeleComponent } from './it-tele.component';
import { SectionComponent } from '../../utilities/industryUtility/section/section.component';

describe('ItTeleComponent', () => {
  let component: ItTeleComponent;
  let fixture: ComponentFixture<ItTeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItTeleComponent, SectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
