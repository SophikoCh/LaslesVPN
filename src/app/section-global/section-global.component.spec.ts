import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGlobalComponent } from './section-global.component';

describe('SectionGlobalComponent', () => {
  let component: SectionGlobalComponent;
  let fixture: ComponentFixture<SectionGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
