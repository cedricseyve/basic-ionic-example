import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1-card',
  templateUrl: './tab1-card.component.html',
  styleUrls: ['./tab1-card.component.scss'],
})
export class Tab1CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
