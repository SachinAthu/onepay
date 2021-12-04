import { Component, OnInit } from '@angular/core';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons/faMoon'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons/faMoon'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faMoonRegular = faMoonRegular;
  faMoonSolid = faMoonSolid;

  constructor() { }

  ngOnInit(): void {
  }

}
