import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySetsComponent } from './my-sets.component';

describe('MySetsComponent', () => {
  let component: MySetsComponent;
  let fixture: ComponentFixture<MySetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
