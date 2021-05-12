import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirectorsAndOfficiersComponent } from './add-directors-and-officiers.component';

describe('AddDirectorsAndOfficiersComponent', () => {
  let component: AddDirectorsAndOfficiersComponent;
  let fixture: ComponentFixture<AddDirectorsAndOfficiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDirectorsAndOfficiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDirectorsAndOfficiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
