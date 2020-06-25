import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderBanerComponent } from './site-header-baner.component';

describe('SiteHeaderBanerComponent', () => {
  let component: SiteHeaderBanerComponent;
  let fixture: ComponentFixture<SiteHeaderBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHeaderBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeaderBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
