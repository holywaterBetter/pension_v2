/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MountainClimbingComponent } from './mountain-climbing.component';

describe('MountainClimbingComponent', () => {
  let component: MountainClimbingComponent;
  let fixture: ComponentFixture<MountainClimbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainClimbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainClimbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
