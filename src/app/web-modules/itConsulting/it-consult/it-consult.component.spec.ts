import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItConsultComponent } from './it-consult.component';
import { MainComponent } from '../../utilities/main/main.component';
import { WhyChooseUsComponent } from '../../utilities/why-choose-us/why-choose-us.component';
import { WhyComponent } from '../../utilities/why/why.component';
import { WhatComponent } from '../../utilities/what/what.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItConsultComponent', () => {
  let component: ItConsultComponent;
  let fixture: ComponentFixture<ItConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItConsultComponent,
        MainComponent,
        WhyChooseUsComponent,
        WhyComponent,
        WhatComponent,
      ],
      imports: [CarouselModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ItConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
