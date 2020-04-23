import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrusselComponent } from './carrussel.component';

describe('CarrusselComponent', () => {
  let component: CarrusselComponent;
  let fixture: ComponentFixture<CarrusselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrusselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrusselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
