import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Features, Permission} from 'src/app/models/IPermission';

@Component({
  selector: 'app-lg-card',
  templateUrl: './lg-card.component.html',
  styleUrls: ['./lg-card.component.scss'],
})
export class LgCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() selectedTheme: string;

  @Output() greenTheme = new EventEmitter();

  permission = Permission;
  features = Features;

  constructor() {}

  ngOnInit() {}
}
