import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorConfigurationComponent } from './color-configuration.component';

describe('ColorConfigurationComponent', () => {
  let component: ColorConfigurationComponent;
  let fixture: ComponentFixture<ColorConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
