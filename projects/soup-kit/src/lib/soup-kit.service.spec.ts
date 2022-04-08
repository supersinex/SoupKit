import { TestBed } from '@angular/core/testing';

import { SoupKitService } from './soup-kit.service';

describe('SoupKitService', () => {
  let service: SoupKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoupKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
