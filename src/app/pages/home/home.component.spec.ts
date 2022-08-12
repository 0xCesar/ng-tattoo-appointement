import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homePage } from './home.component';

describe('homePage', () => {
  let component: homePage;
  let fixture: ComponentFixture<homePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(homePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
