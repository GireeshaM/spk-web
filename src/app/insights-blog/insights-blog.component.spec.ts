import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsBlogComponent } from './insights-blog.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InsightsBlogComponent', () => {
  let component: InsightsBlogComponent;
  let fixture: ComponentFixture<InsightsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsightsBlogComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
