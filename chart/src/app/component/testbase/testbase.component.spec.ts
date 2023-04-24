import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbaseComponent } from './testbase.component';

describe('TestbaseComponent', () => {
  let component: TestbaseComponent;
  let fixture: ComponentFixture<TestbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
