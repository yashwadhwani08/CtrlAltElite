import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherepistComponent } from './therepist.component';

describe('TherepistComponent', () => {
  let component: TherepistComponent;
  let fixture: ComponentFixture<TherepistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherepistComponent]
    });
    fixture = TestBed.createComponent(TherepistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
