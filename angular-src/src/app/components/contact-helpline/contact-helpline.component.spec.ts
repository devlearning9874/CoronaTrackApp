import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHelplineComponent } from './contact-helpline.component';

describe('ContactHelplineComponent', () => {
  let component: ContactHelplineComponent;
  let fixture: ComponentFixture<ContactHelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHelplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
