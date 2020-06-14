import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from './calendar/calendar.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KeyValuePipe } from './shared/keyvalue.pipe';
import { AgGridCalendarComponent } from './ag-grid-calendar/ag-grid-calendar.component'
import { AgGridModule } from 'ag-grid-angular';
import { EntryCellRenderer } from './entry-cell-renderer/entry-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalendarComponent,
    KeyValuePipe,
    AgGridCalendarComponent,
    EntryCellRenderer
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
