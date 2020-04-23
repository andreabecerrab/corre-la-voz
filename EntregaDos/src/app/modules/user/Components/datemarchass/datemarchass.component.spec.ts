import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatemarchassComponent } from './datemarchass.component';

describe('DatemarchassComponent', () => {
  let component: DatemarchassComponent;
  let fixture: ComponentFixture<DatemarchassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatemarchassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatemarchassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
