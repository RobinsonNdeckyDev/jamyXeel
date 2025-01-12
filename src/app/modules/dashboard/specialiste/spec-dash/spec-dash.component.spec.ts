import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDashComponent } from './spec-dash.component';

describe('SpecDashComponent', () => {
  let component: SpecDashComponent;
  let fixture: ComponentFixture<SpecDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
