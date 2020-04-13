/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkinService } from './skin.service';

describe('Service: SkinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkinService]
    });
  });

  it('should ...', inject([SkinService], (service: SkinService) => {
    expect(service).toBeTruthy();
  }));
});
