import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesYearsListComponent } from './themes-years-list.component';

describe('ThemesYearsListComponent', () => {
  let component: ThemesYearsListComponent;
  let fixture: ComponentFixture<ThemesYearsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesYearsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesYearsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
