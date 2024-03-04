import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubscribtionComponent } from './section-subscribtion.component';

describe('SectionSubscribtionComponent', () => {
  let component: SectionSubscribtionComponent;
  let fixture: ComponentFixture<SectionSubscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSubscribtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
