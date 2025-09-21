import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandling2 } from './form-handling-2';

describe('FormHandling2', () => {
  let component: FormHandling2;
  let fixture: ComponentFixture<FormHandling2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandling2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandling2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
