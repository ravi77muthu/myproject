import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdetailComponent } from './regdetail.component';

describe('RegdetailComponent', () => {
  let component: RegdetailComponent;
  let fixture: ComponentFixture<RegdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
