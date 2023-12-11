import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainImageComponent } from 'src/app/shared/main-image/main-image.component';
import { SectionProjectsComponent } from 'src/app/shared/section-projects/section-projects.component';
import { SectionContactComponent } from 'src/app/shared/section-contact/section-contact.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { GithubContactComponent } from 'src/app/shared/github-contact/github-contact.component';
import { LinkedinContactComponent } from 'src/app/shared/linkedin-contact/linkedin-contact.component';
import { GmailContactComponent } from 'src/app/shared/gmail-contact/gmail-contact.component';
import { SectionAboutComponent } from 'src/app/shared/section-about/section-about.component';
import { SectionExperienciaComponent } from 'src/app/shared/section-experiencia/section-experiencia.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainImageComponent,
    SectionAboutComponent,
    SectionExperienciaComponent,
    SectionProjectsComponent,
    SectionContactComponent,
    FooterComponent,

    //Contatos
    GithubContactComponent,
    LinkedinContactComponent,
    GmailContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HomeComponent]
})
export class HomeModule { }
