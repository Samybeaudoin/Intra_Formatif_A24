import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { prefercatGuard } from './prefercat.guard';

describe('prefercatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => prefercatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
