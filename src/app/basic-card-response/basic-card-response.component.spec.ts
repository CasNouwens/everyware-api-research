import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardResponseComponent } from './basic-card-response.component';

describe('BasicCardResponseComponent', () => {
  let component: BasicCardResponseComponent;
  let fixture: ComponentFixture<BasicCardResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCardResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCardResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
