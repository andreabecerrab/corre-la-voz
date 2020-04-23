import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StikeContentComponent } from './stike-content.component';

describe('StikeContentComponent', () => {
  let component: StikeContentComponent;
  let fixture: ComponentFixture<StikeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StikeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StikeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
