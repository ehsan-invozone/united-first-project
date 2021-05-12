import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrustComponent } from './add-trust.component';

describe('AddTrustComponent', () => {
  let component: AddTrustComponent;
  let fixture: ComponentFixture<AddTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
