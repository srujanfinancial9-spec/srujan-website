import { TestBed } from '@angular/core/testing';

import { MongodbTokenServiceService } from './mongodb-token-service.service';

describe('MongodbTokenServiceService', () => {
  let service: MongodbTokenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongodbTokenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
