import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicePage } from './our-service.component';

describe('OurServicePage', () => {
  let component: OurServicePage;
  let fixture: ComponentFixture<OurServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
