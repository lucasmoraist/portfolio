import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainImageComponent } from 'src/app/shared/main-image/main-image.component';
import { SectionAboutComponent } from 'src/app/shared/section-about/section-about.component';
import { SectionContactComponent } from 'src/app/shared/section-contact/section-contact.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SectionProjectsComponent } from 'src/app/shared/section-projects/section-projects.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent, //cabeçalho
    BtnPrimaryComponent, //botão
    MainSectionComponent, //seção main
    MainImageComponent, //imagem em svg para seção main
    SectionAboutComponent, //seção sobre mim
    SectionProjectsComponent,
    SectionContactComponent, //seção com contatos
    FooterComponent //rodapé
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HomeComponent]
})
export class HomeModule { }
