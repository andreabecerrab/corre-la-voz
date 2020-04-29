import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStrikeComponent } from './edit-strike.component';

describe('EditStrikeComponent', () => {
  let component: EditStrikeComponent;
  let fixture: ComponentFixture<EditStrikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStrikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStrikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
