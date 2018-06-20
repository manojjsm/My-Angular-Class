import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonarComponent } from './show-donar.component';

describe('ShowDonarComponent', () => {
  let component: ShowDonarComponent;
  let fixture: ComponentFixture<ShowDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
