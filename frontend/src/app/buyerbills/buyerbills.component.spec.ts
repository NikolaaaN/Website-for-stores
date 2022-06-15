import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerbillsComponent } from './buyerbills.component';

describe('BuyerbillsComponent', () => {
  let component: BuyerbillsComponent;
  let fixture: ComponentFixture<BuyerbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
