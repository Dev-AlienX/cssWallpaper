import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeConfigurationComponent } from './size-configuration.component';

describe('SizeConfigurationComponent', () => {
  let component: SizeConfigurationComponent;
  let fixture: ComponentFixture<SizeConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
