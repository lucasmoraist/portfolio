<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
>>>>>>> origin/develop
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainImageComponent } from 'src/app/shared/main-image/main-image.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainImageComponent
=======
import { SectionAboutComponent } from 'src/app/shared/section-about/section-about.component';
import { SectionContactComponent } from 'src/app/shared/section-contact/section-contact.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SectionProjectsComponent } from 'src/app/shared/section-projects/section-projects.component';
import { GmailContactComponent } from 'src/app/shared/gmail-contact/gmail-contact.component';
import { LinkedinContactComponent } from 'src/app/shared/linkedin-contact/linkedin-contact.component';
import { GithubContactComponent } from 'src/app/shared/github-contact/github-contact.component';
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
    FooterComponent, //rodapé

    //Contatos
    LinkedinContactComponent,
    GmailContactComponent,
    GithubContactComponent,
>>>>>>> origin/develop
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
<<<<<<< HEAD
  exports: [HomeComponent]
=======
  exports: [HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> origin/develop
})
export class HomeModule { }
