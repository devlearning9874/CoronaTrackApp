import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalbedsComponent } from './hospitalbeds.component';

describe('HospitalbedsComponent', () => {
  let component: HospitalbedsComponent;
  let fixture: ComponentFixture<HospitalbedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalbedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
