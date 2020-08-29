import { TestBed } from '@angular/core/testing';

import { ReciepeService } from './reciepe.service';

describe('ReciepeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReciepeService = TestBed.get(ReciepeService);
    expect(service).toBeTruthy();
  });
});
