import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpuntoComponent } from './agregarpunto.component';

describe('AgregarpuntoComponent', () => {
  let component: AgregarpuntoComponent;
  let fixture: ComponentFixture<AgregarpuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarpuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
