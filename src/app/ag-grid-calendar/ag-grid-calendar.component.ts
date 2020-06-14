import { Component, OnInit } from '@angular/core';
import { Grid } from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { EntryCellRenderer } from '../entry-cell-renderer/entry-cell-renderer.component';

@Component({
  selector: 'app-ag-grid-calendar',
  templateUrl: './ag-grid-calendar.component.html',
  styleUrls: ['./ag-grid-calendar.component.scss']
})

export class AgGridCalendarComponent {

  public frameworkComponents

  monday8 = { title: 'React Native', imageurl: '../assets/react-native.png', starttime: '08:00', duration: 1 }
  columnDefs
  rowData
  defaultColDef
  getRowHeight

  constructor() {
    this.columnDefs = [
      { headerName: 'Time', field: 'time' },
      { headerName: 'Monday', field: 'monday', cellRenderer: 'entryCellRenderer' },
      { headerName: 'Tuesday', field: 'tuesday', cellRenderer: 'entryCellRenderer'},
      { headerName: 'Wednesday', field: 'wednesday', cellRenderer: 'entryCellRenderer'},
      { headerName: 'Thursday', field: 'thursday', cellRenderer: 'entryCellRenderer'},
      { headerName: 'Friday', field: 'friday', cellRenderer: 'entryCellRenderer'},
      { headerName: 'Saturday', field: 'saturday', cellRenderer: 'entryCellRenderer'},
      { headerName: 'Sunday', field: 'sunday', cellRenderer: 'entryCellRenderer'},
    ]
    this.rowData = [
      { time: '08:00', monday: this.monday8, tuesday: {}, wednesday: {}, thursday: {}, friday: {}, saturday: {}, sunday: {} }
    ]
    this.frameworkComponents = {
      entryCellRenderer: EntryCellRenderer
    }
    this.defaultColDef = {
      width: 175,
      sortable: false,
      resizable: false,
      filter: false,
    };
    this.getRowHeight = function (params) {
      return getHeightByDuration(params.data.monday.duration)
    }
  }

}
function getHeightByDuration(duration): number {
  return duration * 165
}