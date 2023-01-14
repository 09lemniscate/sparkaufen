import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPlanComponent } from './setup-plan.component';

describe('SetupPlanComponent', () => {
  let component: SetupPlanComponent;
  let fixture: ComponentFixture<SetupPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
