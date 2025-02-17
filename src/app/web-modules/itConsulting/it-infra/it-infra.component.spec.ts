import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItInfraComponent } from './it-infra.component';
import { MainComponent } from '../../utilities/main/main.component';
import { ItCommonComponent } from '../it-common/it-common.component';

describe('ItInfraComponent', () => {
  let component: ItInfraComponent;
  let fixture: ComponentFixture<ItInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItInfraComponent, MainComponent, ItCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
