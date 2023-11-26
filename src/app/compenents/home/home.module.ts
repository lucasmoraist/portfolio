import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainImageComponent } from 'src/app/shared/main-image/main-image.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HomeComponent]
})
export class HomeModule { }
