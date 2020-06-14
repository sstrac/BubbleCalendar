import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss','../calendar/calendar.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() image
  @Input() title

  constructor() { }

  ngOnInit(): void {
  }

}
