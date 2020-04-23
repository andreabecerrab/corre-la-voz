import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMarkComponent } from './agregar-mark.component';

describe('AgregarMarkComponent', () => {
  let component: AgregarMarkComponent;
  let fixture: ComponentFixture<AgregarMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
