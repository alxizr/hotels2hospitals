import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsHomeComponent } from './logs-home.component';

describe('LogsHomeComponent', () => {
  let component: LogsHomeComponent;
  let fixture: ComponentFixture<LogsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
