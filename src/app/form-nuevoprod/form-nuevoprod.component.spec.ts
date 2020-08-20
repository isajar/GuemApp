import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoprodComponent } from './form-nuevoprod.component';

describe('FormNuevoprodComponent', () => {
  let component: FormNuevoprodComponent;
  let fixture: ComponentFixture<FormNuevoprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
