import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikecardComponent } from './strikecard.component';

describe('StrikecardComponent', () => {
  let component: StrikecardComponent;
  let fixture: ComponentFixture<StrikecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrikecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
