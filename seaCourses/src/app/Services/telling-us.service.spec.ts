import { TestBed } from '@angular/core/testing';

import { TellingUSService } from './telling-us.service';

describe('TellingUSService', () => {
  let service: TellingUSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TellingUSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
