import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveWallpaperComponent } from './save-wallpaper.component';

describe('SaveWallpaperComponent', () => {
  let component: SaveWallpaperComponent;
  let fixture: ComponentFixture<SaveWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveWallpaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
