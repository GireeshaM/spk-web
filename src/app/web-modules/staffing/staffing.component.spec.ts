import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingComponent } from './staffing.component';
import { MainComponent } from '../utilities/main/main.component';
import { WhyChooseUsComponent } from '../utilities/why-choose-us/why-choose-us.component';
import { WhyComponent } from '../utilities/why/why.component';
import { WhatComponent } from '../utilities/what/what.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterTestingModule } from '@angular/router/testing';

describe('StaffingComponent', () => {
  let component: StaffingComponent;
  let fixture: ComponentFixture<StaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StaffingComponent,
        MainComponent,
        WhyChooseUsComponent,
        WhyComponent,
        WhatComponent,
      ],
      imports: [CarouselModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
