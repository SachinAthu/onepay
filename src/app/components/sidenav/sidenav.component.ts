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

  ngOnInit(): void {
    const links = document.querySelectorAll('.sub-menu-item');
    for (let i = 0; i < links.length; i++) {
      links[i]?.addEventListener('click', () => this.navigate(links[i]));
    }
  }

  ngOnDestroy() {
    const links = document.querySelectorAll('.sub-menu-item');
    for (let i = 0; i < links.length; i++) {
      links[i]?.removeEventListener('click', () => this.navigate(links[i]));
    }
  }

  // navigate to the route
  navigate(element: any) {
    const id = element.id;
    if (!id) return;
    // console.log(id);

    const links = document.querySelectorAll('.sub-menu-item');
    for (let i = 0; i < links.length; i++) {
      links[i]?.classList.remove('sub-menu-item__active');
    }

    let route = '/';
    switch (id) {
      case 'sub-menu-item-apps':
        route = '/apps';
        break;
      case 'sub-menu-item-1':
      case 'sub-menu-item-2':
        route = '/other';
        break;
      default:
        route = '/';
    }

    document.getElementById(id)?.classList.add('sub-menu-item__active');
    this._router.navigateByUrl(route);
  }
}
