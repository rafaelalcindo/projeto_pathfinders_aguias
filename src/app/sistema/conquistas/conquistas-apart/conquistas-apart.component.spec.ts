import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquistasApartComponent } from './conquistas-apart.component';

describe('ConquistasApartComponent', () => {
  let component: ConquistasApartComponent;
  let fixture: ComponentFixture<ConquistasApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConquistasApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConquistasApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
