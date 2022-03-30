import { TestBed } from '@angular/core/testing';

import { TaiSanService } from './tai-san.service';

describe('TaiSanService', () => {
  let service: TaiSanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaiSanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
