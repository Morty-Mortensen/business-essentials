import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingBussinessEssentialsComponent } from './accounting-bussiness-essentials.component';

describe('AccountingBussinessEssentialsComponent', () => {
  let component: AccountingBussinessEssentialsComponent;
  let fixture: ComponentFixture<AccountingBussinessEssentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingBussinessEssentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingBussinessEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
