import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wallpaper1Component } from './wallpaper1.component';

describe('Wallpaper1Component', () => {
  let component: Wallpaper1Component;
  let fixture: ComponentFixture<Wallpaper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wallpaper1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wallpaper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
