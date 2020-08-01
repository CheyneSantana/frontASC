import { TestBed } from '@angular/core/testing';

import { TitulosIndividuaisService } from './titulos-individuais.service';

describe('TitulosIndividuaisService', () => {
  let service: TitulosIndividuaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitulosIndividuaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
