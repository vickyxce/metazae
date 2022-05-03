import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevservicesComponent } from './devservices.component';

describe('DevservicesComponent', () => {
  let component: DevservicesComponent;
  let fixture: ComponentFixture<DevservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
