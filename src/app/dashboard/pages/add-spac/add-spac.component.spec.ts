import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpacComponent } from './add-spac.component';

describe('AddSpacComponent', () => {
  let component: AddSpacComponent;
  let fixture: ComponentFixture<AddSpacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
