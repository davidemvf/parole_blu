import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaggiComponent } from './saggi.component';

describe('SaggiComponent', () => {
  let component: SaggiComponent;
  let fixture: ComponentFixture<SaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaggiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
