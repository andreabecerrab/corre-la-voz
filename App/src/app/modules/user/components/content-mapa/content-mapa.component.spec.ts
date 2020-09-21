import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMapaComponent } from './content-mapa.component';

describe('ContentMapaComponent', () => {
  let component: ContentMapaComponent;
  let fixture: ComponentFixture<ContentMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
