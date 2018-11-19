import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testes01Component } from './testes01.component';

describe('Testes01Component', () => {
  let component: Testes01Component;
  let fixture: ComponentFixture<Testes01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testes01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testes01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
