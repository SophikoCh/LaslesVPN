import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEasyVPNComponent } from './section-easy-vpn.component';

describe('SectionEasyVPNComponent', () => {
  let component: SectionEasyVPNComponent;
  let fixture: ComponentFixture<SectionEasyVPNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEasyVPNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEasyVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
