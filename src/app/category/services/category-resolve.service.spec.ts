/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryResolveService } from './category-resolve.service';

describe('CategoryResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryResolveService]
    });
  });

  it('should ...', inject([CategoryResolveService], (service: CategoryResolveService) => {
    expect(service).toBeTruthy();
  }));
});
