import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDesignComponent } from './it-design.component';
import { MainComponent } from '../../utilities/main/main.component';
import { ItCommonComponent } from '../it-common/it-common.component';

describe('ItDesignComponent', () => {
  let component: ItDesignComponent;
  let fixture: ComponentFixture<ItDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItDesignComponent, MainComponent, ItCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
