import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteracrionsComponent } from './interacrions.component';

describe('InteracrionsComponent', () => {
  let component: InteracrionsComponent;
  let fixture: ComponentFixture<InteracrionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteracrionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteracrionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
