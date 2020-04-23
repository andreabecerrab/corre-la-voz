import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreMarchaComponent } from './nombre-marcha.component';

describe('NombreMarchaComponent', () => {
  let component: NombreMarchaComponent;
  let fixture: ComponentFixture<NombreMarchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreMarchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreMarchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
