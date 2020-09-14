import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCasesComponent } from './compare-cases.component';

describe('CompareCasesComponent', () => {
  let component: CompareCasesComponent;
  let fixture: ComponentFixture<CompareCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
