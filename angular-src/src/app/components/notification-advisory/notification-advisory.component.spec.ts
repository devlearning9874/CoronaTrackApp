import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAdvisoryComponent } from './notification-advisory.component';

describe('NotificationAdvisoryComponent', () => {
  let component: NotificationAdvisoryComponent;
  let fixture: ComponentFixture<NotificationAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
