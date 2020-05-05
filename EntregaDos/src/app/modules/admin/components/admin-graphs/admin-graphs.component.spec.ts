import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGraphsComponent } from './admin-graphs.component';

describe('AdminGraphsComponent', () => {
  let component: AdminGraphsComponent;
  let fixture: ComponentFixture<AdminGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
