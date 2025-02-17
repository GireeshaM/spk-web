import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementComponent } from './project-management.component';
import { MainComponent } from '../utilities/main/main.component';
import { WhyComponent } from '../utilities/why/why.component';
import { WhatComponent } from '../utilities/what/what.component';
import { WhyChooseUsComponent } from '../utilities/why-choose-us/why-choose-us.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectManagementComponent', () => {
  let component: ProjectManagementComponent;
  let fixture: ComponentFixture<ProjectManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectManagementComponent,
        MainComponent,
        WhyComponent,
        WhatComponent,
        WhyChooseUsComponent,
      ],
      imports: [CarouselModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
