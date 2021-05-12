import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministrativeDetailsComponent } from './add-administrative-details.component';

describe('AddAdministrativeDetailsComponent', () => {
  let component: AddAdministrativeDetailsComponent;
  let fixture: ComponentFixture<AddAdministrativeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdministrativeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdministrativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
