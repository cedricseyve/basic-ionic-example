import { Component, OnInit } from '@angular/core';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { ICalendarEvents } from 'src/app/models/ICalendarEvents';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  eventSource;
  viewTitle;

  isToday: boolean;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    showEventDetail: false,
    // Required :
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.initSomeEvents();
  }

  private initSomeEvents(): void {
    const startEventSeemInUse = new Date();
    startEventSeemInUse.setDate(startEventSeemInUse.getDate() - 14);
    const endEventSeemInUse = new Date();
    endEventSeemInUse.setDate(endEventSeemInUse.getDate() - 7);

    const startEventInUse = new Date();
    startEventInUse.setDate(startEventInUse.getDate() - 6);
    const endEventInUse = new Date();
    endEventInUse.setDate(endEventInUse.getDate() - 1);

    const startEventNotInUse = new Date();
    startEventNotInUse.setDate(startEventNotInUse.getDate() + 5);
    const endEventNotInUse = new Date();
    endEventNotInUse.setDate(endEventNotInUse.getDate() + 20);

    this.eventSource = [
      {
        title: 'Seem in use',
        startTime: startEventSeemInUse,
        endTime: endEventSeemInUse,
        allDay: true,
        eventType: ICalendarEvents.seemInUse,
      },
      {
        title: 'In use',
        startTime: startEventInUse,
        endTime: endEventInUse,
        allDay: true,
        eventType: ICalendarEvents.inUse,
      },
      {
        title: 'Not in use',
        startTime: startEventNotInUse,
        endTime: endEventNotInUse,
        allDay: true,
        eventType: ICalendarEvents.notInUse,
      },
    ];
  }

  public setEventClasses(event: ICalendarEvents, label: string) {
    return `${event} ${parseInt(label) < 10 ? 'single-digit' : ''}`;
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }
}
