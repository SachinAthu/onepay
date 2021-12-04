import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipg-form',
  templateUrl: './ipg-form.component.html',
  styleUrls: ['./ipg-form.component.scss']
})
export class IpgFormComponent implements OnInit {
  name!: string;
  email!: string;
  phone!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate() {
    if(!this.name || !this.email || !this.phone) {
      alert("Fill required fields!");
      return;
    }

    // update
    //

    this.name = '';
    this.email = '';
    this.phone = '';
  }

}
