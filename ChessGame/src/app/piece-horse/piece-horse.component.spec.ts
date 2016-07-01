/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PieceHorseComponent } from './piece-horse.component';

describe('Component: PieceHorse', () => {
  it('should create an instance', () => {
    let component = new PieceHorseComponent();
    expect(component).toBeTruthy();
  });
});
