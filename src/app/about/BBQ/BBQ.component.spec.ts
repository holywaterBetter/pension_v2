/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBQComponent } from './BBQ.component';

describe('BbqComponent', () => {
  let component: BBQComponent;
  let fixture: ComponentFixture<BBQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BBQComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
