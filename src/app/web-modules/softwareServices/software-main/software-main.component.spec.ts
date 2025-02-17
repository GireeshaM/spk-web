import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareMainComponent } from './software-main.component';
import { MainComponent } from '../../utilities/main/main.component';

describe('SoftwareMainComponent', () => {
  let component: SoftwareMainComponent;
  let fixture: ComponentFixture<SoftwareMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareMainComponent, MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
