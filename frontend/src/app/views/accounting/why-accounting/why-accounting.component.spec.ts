import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAccountingComponent } from './why-accounting.component';

describe('WhyAccountingComponent', () => {
  let component: WhyAccountingComponent;
  let fixture: ComponentFixture<WhyAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
