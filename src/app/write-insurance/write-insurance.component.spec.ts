import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteInsuranceComponent } from './write-insurance.component';

describe('WriteInsuranceComponent', () => {
  let component: WriteInsuranceComponent;
  let fixture: ComponentFixture<WriteInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
