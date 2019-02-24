import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinLoadComponent } from './spin-load.component';

describe('SpinLoadComponent', () => {
  let component: SpinLoadComponent;
  let fixture: ComponentFixture<SpinLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
