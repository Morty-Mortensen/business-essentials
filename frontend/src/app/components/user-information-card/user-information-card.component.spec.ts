import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationCardComponent } from './user-information-card.component';

describe('UserInformationCardComponent', () => {
  let component: UserInformationCardComponent;
  let fixture: ComponentFixture<UserInformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
