import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Wallpaper1Component } from './pages/wallpaper1/wallpaper1.component';

const routes: Routes = [
  { path: '', redirectTo: 'wallpaper1', pathMatch: 'full' }, // shuld change to home
  { path: 'home', component: HomeComponent },
  { path: 'wallpaper1', component: Wallpaper1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
