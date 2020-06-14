import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'entry-cell-renderer',
  templateUrl: './entry-cell-renderer.component.html',
  styleUrls: ['./entry-cell-renderer.component.scss']
})
export class EntryCellRenderer implements ICellRendererAngularComp  {

  params: any
  title: string
  imageurl: string

  agInit(params: any): void {
    this.params = params
    this.title = params.value.title
    this.imageurl = params.value.imageurl
  }

  refresh(): boolean{
    return false
  }

  logParams(){
    console.log(this.params)
  }

}
