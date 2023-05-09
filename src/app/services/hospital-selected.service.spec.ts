import { TestBed } from '@angular/core/testing';

import { HospitalSelectedService } from './hospital-selected.service';

describe('HospitalSelectedService', () => {
  let service: HospitalSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
