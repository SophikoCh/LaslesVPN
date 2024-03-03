import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatisticsComponent } from './section-statistics.component';

describe('SectionStatisticsComponent', () => {
  let component: SectionStatisticsComponent;
  let fixture: ComponentFixture<SectionStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
