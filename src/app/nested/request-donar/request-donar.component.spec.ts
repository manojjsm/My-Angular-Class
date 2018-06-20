import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDonarComponent } from './request-donar.component';

describe('RequestDonarComponent', () => {
  let component: RequestDonarComponent;
  let fixture: ComponentFixture<RequestDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
