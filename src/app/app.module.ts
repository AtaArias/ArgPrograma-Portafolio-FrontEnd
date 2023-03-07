import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { NgIconsModule } from '@ng-icons/core';
// edit 
import { bootstrapPencil } from '@ng-icons/bootstrap-icons';
import { bootstrapPlus } from '@ng-icons/bootstrap-icons';
import { bootstrapDash } from '@ng-icons/bootstrap-icons';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons';
import { bootstrapSave } from '@ng-icons/bootstrap-icons';
import { bootstrapX } from '@ng-icons/bootstrap-icons';
// social
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapInstagram } from '@ng-icons/bootstrap-icons';
// log
import { bootstrapPerson } from '@ng-icons/bootstrap-icons';
import { bootstrapArrow90degLeft } from '@ng-icons/bootstrap-icons';
import { bootstrapBoxArrowLeft } from '@ng-icons/bootstrap-icons';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { InstCardComponent } from './components/inst-card/inst-card.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NewCardFormComponent } from './components/new-card-form/new-card-form.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    InstCardComponent,
    EducationComponent,
    SkillsComponent,
    NewCardFormComponent,
    LogInPageComponent,
    PortofolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      bootstrapPencil,
      bootstrapTrash,
      bootstrapPlus,
      bootstrapDash,
      bootstrapX,
      bootstrapSave,
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapPerson,
      bootstrapArrow90degLeft,
      bootstrapBoxArrowLeft
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
