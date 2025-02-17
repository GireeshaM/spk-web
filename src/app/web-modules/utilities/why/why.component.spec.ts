import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyComponent } from './why.component';

describe('WhyComponent', () => {
  let component: WhyComponent;
  let fixture: ComponentFixture<WhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyComponent);
    component = fixture.componentInstance;
    component.images = [
      'path/to/image1.png',
      'path/to/image2.png',
      'path/to/image3.png',
      'path/to/image4.png',
    ];
    component.whyList = [
      'Title 1',
      'Description 1',
      'Title 2',
      'Description 2',
      'Title 3',
      'Description 3',
      'Title 4',
      'Description 4',
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
