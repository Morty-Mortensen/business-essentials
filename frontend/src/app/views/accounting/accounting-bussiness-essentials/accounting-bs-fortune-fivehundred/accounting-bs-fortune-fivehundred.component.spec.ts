import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingBsFortuneFivehundredComponent } from './accounting-bs-fortune-fivehundred.component';

describe('AccountingBsFortuneFivehundredComponent', () => {
  let component: AccountingBsFortuneFivehundredComponent;
  let fixture: ComponentFixture<AccountingBsFortuneFivehundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingBsFortuneFivehundredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingBsFortuneFivehundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
