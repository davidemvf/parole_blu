import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaccontiComponent } from './racconti.component';

describe('RaccontiComponent', () => {
  let component: RaccontiComponent;
  let fixture: ComponentFixture<RaccontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaccontiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaccontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
