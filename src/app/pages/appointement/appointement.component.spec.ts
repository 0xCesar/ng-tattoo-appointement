import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementPage } from './appointement.component';

describe('AppointementPage', () => {
  let component: AppointementPage;
  let fixture: ComponentFixture<AppointementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
