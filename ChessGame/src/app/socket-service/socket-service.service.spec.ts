/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SocketServiceService } from './socket-service.service';

describe('SocketService Service', () => {
  beforeEachProviders(() => [SocketServiceService]);

  it('should ...',
      inject([SocketServiceService], (service: SocketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
