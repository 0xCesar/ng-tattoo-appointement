import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCliComponent } from './folder-cli.component';

describe('FolderCliComponent', () => {
  let component: FolderCliComponent;
  let fixture: ComponentFixture<FolderCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
