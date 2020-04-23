import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContCarruselComponent } from './cont-carrusel.component';

describe('ContCarruselComponent', () => {
  let component: ContCarruselComponent;
  let fixture: ComponentFixture<ContCarruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContCarruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
