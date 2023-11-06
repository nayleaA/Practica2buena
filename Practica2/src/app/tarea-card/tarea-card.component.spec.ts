import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCardComponent } from './tarea-card.component';

describe('TareaCardComponent', () => {
  let component: TareaCardComponent;
  let fixture: ComponentFixture<TareaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaCardComponent]
    });
    fixture = TestBed.createComponent(TareaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
