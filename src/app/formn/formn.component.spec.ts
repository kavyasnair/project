import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnComponent } from './formn.component';

describe('FormnComponent', () => {
  let component: FormnComponent;
  let fixture: ComponentFixture<FormnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
