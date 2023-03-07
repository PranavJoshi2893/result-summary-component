import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSummeryComponent } from './result-summery.component';

describe('ResultSummeryComponent', () => {
  let component: ResultSummeryComponent;
  let fixture: ComponentFixture<ResultSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
