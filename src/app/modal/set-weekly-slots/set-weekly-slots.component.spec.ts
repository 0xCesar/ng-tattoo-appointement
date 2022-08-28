import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetWeeklySlotsComponent } from './set-weekly-slots.component';

describe('SetWeeklySlotsComponent', () => {
  let component: SetWeeklySlotsComponent;
  let fixture: ComponentFixture<SetWeeklySlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetWeeklySlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetWeeklySlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
