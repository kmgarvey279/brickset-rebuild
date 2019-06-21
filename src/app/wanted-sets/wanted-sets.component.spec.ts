import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedSetsComponent } from './wanted-sets.component';

describe('WantedSetsComponent', () => {
  let component: WantedSetsComponent;
  let fixture: ComponentFixture<WantedSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantedSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantedSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
