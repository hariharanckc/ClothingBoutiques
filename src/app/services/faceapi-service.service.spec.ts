import { TestBed } from '@angular/core/testing';

import { FaceapiServiceService } from './faceapi-service.service';

describe('FaceapiServiceService', () => {
  let service: FaceapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
