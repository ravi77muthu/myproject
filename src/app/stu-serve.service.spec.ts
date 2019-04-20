import { TestBed } from '@angular/core/testing';

import { StuServeService } from './stu-serve.service';

describe('StuServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuServeService = TestBed.get(StuServeService);
    expect(service).toBeTruthy();
  });
});
