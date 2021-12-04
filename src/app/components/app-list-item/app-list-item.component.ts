import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { App, APP_STATUS } from 'src/app/models/App';

@Component({
  selector: 'app-app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit {
  @Input() app!: App;
  @Output() onDisableApp: EventEmitter<Task> = new EventEmitter();
  @Output() onViewApp: EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateApp: EventEmitter<Task> = new EventEmitter();
  @Output() onSubmitApp: EventEmitter<Task> = new EventEmitter();
  appStatus = APP_STATUS;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.app)
  }

  onDisable() {
    this.onDisableApp.emit();
  }

  onView() {
    this.onViewApp.emit();
  }

  onUpdate() {
    this.onUpdateApp.emit();
  }

  onSubmit() {
    this.onSubmitApp.emit();
  }

}
