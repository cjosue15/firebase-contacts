import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactComponent } from './card-contact.component';

describe('CardContactComponent', () => {
  let component: CardContactComponent;
  let fixture: ComponentFixture<CardContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
