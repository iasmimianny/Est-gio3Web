import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCard } from './treino-card';

describe('TreinoCard', () => {
  let component: TreinoCard;
  let fixture: ComponentFixture<TreinoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
