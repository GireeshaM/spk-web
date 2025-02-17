import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareServiceWhyComponent } from './software-service-why.component';

describe('SoftwareServiceWhyComponent', () => {
  let component: SoftwareServiceWhyComponent;
  let fixture: ComponentFixture<SoftwareServiceWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareServiceWhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareServiceWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
