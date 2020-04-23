import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrourelItemComponent } from './carrourel-item.component';

describe('CarrourelItemComponent', () => {
  let component: CarrourelItemComponent;
  let fixture: ComponentFixture<CarrourelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrourelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrourelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
