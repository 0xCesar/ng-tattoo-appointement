import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPage } from './flash.component';

describe('FlashPage', () => {
  let component: FlashPage;
  let fixture: ComponentFixture<FlashPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
