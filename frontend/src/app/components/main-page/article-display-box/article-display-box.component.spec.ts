import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDisplayBoxComponent } from './article-display-box.component';

describe('ArticleDisplayBoxComponent', () => {
  let component: ArticleDisplayBoxComponent;
  let fixture: ComponentFixture<ArticleDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
