import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTherapeutesComponent } from './liste-therapeutes.component';

describe('ListeTherapeutesComponent', () => {
  let component: ListeTherapeutesComponent;
  let fixture: ComponentFixture<ListeTherapeutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTherapeutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTherapeutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
