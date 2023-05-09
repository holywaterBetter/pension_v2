/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WalkComponent } from './walk.component';

describe('WalkComponent', () => {
  let component: WalkComponent;
  let fixture: ComponentFixture<WalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
