import { TestBed, inject } from '@angular/core/testing';

import { DonarService } from './donar.service';

describe('DonarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonarService]
    });
  });

  it('should be created', inject([DonarService], (service: DonarService) => {
    expect(service).toBeTruthy();
  }));
});
