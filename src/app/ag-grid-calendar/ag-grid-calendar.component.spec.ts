import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCalendarComponent } from './ag-grid-calendar.component';

describe('AgGridCalendarComponent', () => {
  let component: AgGridCalendarComponent;
  let fixture: ComponentFixture<AgGridCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
