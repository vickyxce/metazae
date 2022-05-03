import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthservicesComponent } from './wealthservices.component';

describe('WealthservicesComponent', () => {
  let component: WealthservicesComponent;
  let fixture: ComponentFixture<WealthservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WealthservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
