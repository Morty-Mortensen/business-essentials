import { TestBed } from '@angular/core/testing';

import { ServerFacadeService } from './server-facade.service';

describe('ServerFacadeService', () => {
  let service: ServerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
