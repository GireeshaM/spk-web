import { TestBed } from '@angular/core/testing';

import { LinkServiceService } from './link-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('LinkServiceService', () => {
  let service: LinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
