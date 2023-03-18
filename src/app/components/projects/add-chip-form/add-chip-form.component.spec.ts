import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChipFormComponent } from './add-chip-form.component';

describe('AddChipFormComponent', () => {
  let component: AddChipFormComponent;
  let fixture: ComponentFixture<AddChipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChipFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
