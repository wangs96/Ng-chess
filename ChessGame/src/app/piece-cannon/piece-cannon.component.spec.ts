/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PieceCannonComponent } from './piece-cannon.component';

describe('Component: PieceCannon', () => {
  it('should create an instance', () => {
    let component = new PieceCannonComponent();
    expect(component).toBeTruthy();
  });
});
