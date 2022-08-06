import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorConfigurationComponent } from './component/color-configuration/color-configuration.component';
import { SizeConfigurationComponent } from './component/size-configuration/size-configuration.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SaveWallpaperComponent } from './component/save-wallpaper/save-wallpaper.component';
import { ActionMenuComponent } from './component/action-menu/action-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { Wallpaper1Component } from './pages/wallpaper1/wallpaper1.component';
import { Wallpaper2Component } from './pages/wallpaper2/wallpaper2.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorConfigurationComponent,
    SizeConfigurationComponent,
    NavigationComponent,
    SaveWallpaperComponent,
    ActionMenuComponent,
    HomeComponent,
    Wallpaper1Component,
    Wallpaper2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
