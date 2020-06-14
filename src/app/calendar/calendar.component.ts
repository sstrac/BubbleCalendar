import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  entries = {
    Monday: [
      {title: 'React Native', imageurl: '../assets/react-native.png', starttime: '08:00'}
    ],
    Tuesday: [
      {title: 'Piano', imageurl: '../assets/piano.png', starttime: '11:00'}
    ],
    Wednesday: [
      {title: 'Angular', imageurl: '../assets/angular.png', starttime: '11:00'}
    ],
    Thursday: [
      
    ],
    Friday: [
      
    ],
    Saturday: [
      
    ],
    Sunday: [
      
    ]
  }
  times = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00',
  '23:00']
  
  ngOnInit(): void {
  }

  drop(event){}
  
  getDays = () => { return Object.keys( this.entries ) }

  getDayEntries(day){
    return this.entries[day]
  }
}
