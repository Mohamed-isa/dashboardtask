import { ComponentFixture, TestBed } from '@angular/core/testing';

import { summaryReportComponent } from './summary-report.component';

describe('summaryReportComponent', () => {
  let component: summaryReportComponent;
  let fixture: ComponentFixture<summaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ summaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(summaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
