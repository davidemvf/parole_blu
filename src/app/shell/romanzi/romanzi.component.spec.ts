import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanziComponent } from './romanzi.component';

describe('RomanziComponent', () => {
  let component: RomanziComponent;
  let fixture: ComponentFixture<RomanziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
