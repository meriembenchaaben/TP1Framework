import { TestBed } from '@angular/core/testing';

import { CvEmbauchesService } from './cv-embauches.service';

describe('CvEmbauchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvEmbauchesService = TestBed.get(CvEmbauchesService);
    expect(service).toBeTruthy();
  });
});
