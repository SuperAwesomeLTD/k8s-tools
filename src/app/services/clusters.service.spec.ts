import { TestBed, inject } from '@angular/core/testing';

import { ClustersService } from './clusters.service';

describe('ClustersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClustersService]
    });
  });

  it('should be created', inject([ClustersService], (service: ClustersService) => {
    expect(service).toBeTruthy();
  }));
});
