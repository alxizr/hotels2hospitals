import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GuestsHomeComponent } from "./guests-home.component";

describe("GuestsHomeComponent", () => {
  let component: GuestsHomeComponent;
  let fixture: ComponentFixture<GuestsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestsHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
