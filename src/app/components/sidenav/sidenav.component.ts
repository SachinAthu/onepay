import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  faHome = faHome;

  constructor(private _router: Router) {}

  ngOnInit(): void { }

  // navigate to the route
  navigate(event: any, route: string) {
    const target = event.target || event.srcElement || event.currentTarget;
    const id = target.attributes.id;
    // console.log(target, id);

    const links = document.querySelectorAll('.sub-menu-item');
    for (let i = 0; i < links.length; i++) {
      links[i]?.classList.remove('sub-menu-item__active');
    }

    target?.classList.add('sub-menu-item__active');
    this._router.navigateByUrl(route);
  }
}
