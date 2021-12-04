import { Component, OnInit } from '@angular/core';
import { App, APP_STATUS } from 'src/app/models/App';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  appList: Array<App> = [
    {
      id: 1,
      title: 'IPG My Shopping Site',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi',
      appId: 'jenfkejnfwkejfwejnfe243jijo234jo3ij23',
      services: 'AMEX/Lanka QR/VISA/Master card',
      status: APP_STATUS.LIVE,
    },
    {
      id: 2,
      title: 'IPG My Shopping Site',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi',
      appId: 'jenfkejnfwkejfwejnfe243jijo234jo3ij23',
      services: 'AMEX/Lanka QR/VISA/Master card',
      status: APP_STATUS.ON_DEVELOPMENT,
    },
    {
      id: 3,
      title: 'Test 011',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi',
      appId: 'jenfkejnfwkejfwejnfe243jijo234jo3ij23',
      services: 'AMEX/Lanka QR/VISA/Master card',
      status: APP_STATUS.SUBMITTED,
    },
    {
      id: 4,
      title: 'Test 011',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi',
      appId: 'jenfkejnfwkejfwejnfe243jijo234jo3ij23',
      services: 'AMEX/Lanka QR/VISA/Master card',
      status: APP_STATUS.SUBMITTED,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addNewApp() {
    console.log("called");
  }

  disableApp(app:App) {
    console.log(app);
  }

  viewApp(app:App) {
    console.log(app);
  }

  updateApp(app:App) {
    console.log(app);
  }

  submitApp(app:App) {
    console.log(app);
  }
}
