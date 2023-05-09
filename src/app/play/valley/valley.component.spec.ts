/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValleyComponent } from './valley.component';

describe('ValleyComponent', () => {
  let component: ValleyComponent;
  let fixture: ComponentFixture<ValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
