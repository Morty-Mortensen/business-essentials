import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingBlogComponent } from './accounting-blog.component';

describe('AccountingBlogComponent', () => {
  let component: AccountingBlogComponent;
  let fixture: ComponentFixture<AccountingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
