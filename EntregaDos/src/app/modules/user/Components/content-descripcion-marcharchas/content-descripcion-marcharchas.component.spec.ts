import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDescripcionMarcharchasComponent } from './content-descripcion-marcharchas.component';

describe('ContentDescripcionMarcharchasComponent', () => {
  let component: ContentDescripcionMarcharchasComponent;
  let fixture: ComponentFixture<ContentDescripcionMarcharchasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDescripcionMarcharchasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDescripcionMarcharchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
