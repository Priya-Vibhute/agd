import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandling1 } from './form-handling-1';

describe('FormHandling1', () => {
  let component: FormHandling1;
  let fixture: ComponentFixture<FormHandling1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandling1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandling1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
