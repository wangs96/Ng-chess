/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameCenterComponent } from './game-center.component';

describe('Component: GameCenter', () => {
  it('should create an instance', () => {
    let component = new GameCenterComponent();
    expect(component).toBeTruthy();
  });
});
