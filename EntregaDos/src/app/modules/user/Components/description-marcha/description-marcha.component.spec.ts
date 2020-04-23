import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMarchaComponent } from './description-marcha.component';

describe('DescriptionMarchaComponent', () => {
  let component: DescriptionMarchaComponent;
  let fixture: ComponentFixture<DescriptionMarchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionMarchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionMarchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
