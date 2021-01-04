import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationItemsComponent } from './dropdown-navigation-items.component';

describe('DropdownNavigationItemsComponent', () => {
  let component: DropdownNavigationItemsComponent;
  let fixture: ComponentFixture<DropdownNavigationItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownNavigationItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownNavigationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
