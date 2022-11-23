import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWomenComponent } from './chart-women.component';

describe('ChartWomenComponent', () => {
  let component: ChartWomenComponent;
  let fixture: ComponentFixture<ChartWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
