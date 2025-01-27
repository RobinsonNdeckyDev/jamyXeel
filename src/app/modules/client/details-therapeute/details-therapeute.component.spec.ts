import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTherapeuteComponent } from './details-therapeute.component';

describe('DetailsTherapeuteComponent', () => {
  let component: DetailsTherapeuteComponent;
  let fixture: ComponentFixture<DetailsTherapeuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTherapeuteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTherapeuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
