import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDonarComponent } from './send-donar.component';

describe('SendDonarComponent', () => {
  let component: SendDonarComponent;
  let fixture: ComponentFixture<SendDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
