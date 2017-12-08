import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLoanComponent } from './write-loan.component';

describe('WriteLoanComponent', () => {
  let component: WriteLoanComponent;
  let fixture: ComponentFixture<WriteLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
