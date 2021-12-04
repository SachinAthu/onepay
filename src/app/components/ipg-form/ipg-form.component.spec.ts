import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpgFormComponent } from './ipg-form.component';

describe('IpgFormComponent', () => {
  let component: IpgFormComponent;
  let fixture: ComponentFixture<IpgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
