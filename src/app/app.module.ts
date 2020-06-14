import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from './calendar/calendar.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KeyValuePipe } from './shared/keyvalue.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalendarComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
