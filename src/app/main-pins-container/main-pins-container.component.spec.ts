import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPinsContainerComponent } from './main-pins-container.component';

describe('MainPinsContainerComponent', () => {
  let component: MainPinsContainerComponent;
  let fixture: ComponentFixture<MainPinsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPinsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPinsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
