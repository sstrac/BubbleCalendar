import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCellRenderer } from './entry-cell-renderer.component';

describe('EntryCellRendererComponent', () => {
  let component: EntryCellRenderer;
  let fixture: ComponentFixture<EntryCellRenderer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCellRenderer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
