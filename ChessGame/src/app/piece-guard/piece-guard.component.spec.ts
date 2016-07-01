/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PieceGuardComponent } from './piece-guard.component';

describe('Component: PieceGuard', () => {
  it('should create an instance', () => {
    let component = new PieceGuardComponent();
    expect(component).toBeTruthy();
  });
});
