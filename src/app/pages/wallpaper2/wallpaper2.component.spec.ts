import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wallpaper2Component } from './wallpaper2.component';

describe('Wallpaper2Component', () => {
  let component: Wallpaper2Component;
  let fixture: ComponentFixture<Wallpaper2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wallpaper2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wallpaper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
