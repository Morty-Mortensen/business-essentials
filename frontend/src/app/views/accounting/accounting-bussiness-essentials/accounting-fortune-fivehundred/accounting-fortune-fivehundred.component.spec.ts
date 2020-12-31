import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingFortuneFivehundredComponent } from './accounting-fortune-fivehundred.component';

describe('AccountingFortuneFivehundredComponent', () => {
  let component: AccountingFortuneFivehundredComponent;
  let fixture: ComponentFixture<AccountingFortuneFivehundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingFortuneFivehundredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingFortuneFivehundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
