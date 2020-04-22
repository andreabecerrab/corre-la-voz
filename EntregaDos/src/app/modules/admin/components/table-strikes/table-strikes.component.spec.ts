import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStrikesComponent } from './table-strikes.component';

describe('TableStrikesComponent', () => {
  let component: TableStrikesComponent;
  let fixture: ComponentFixture<TableStrikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStrikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStrikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
