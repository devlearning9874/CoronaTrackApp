import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcollegeComponent } from './medicalcollege.component';

describe('MedicalcollegeComponent', () => {
  let component: MedicalcollegeComponent;
  let fixture: ComponentFixture<MedicalcollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalcollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
