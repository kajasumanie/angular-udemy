import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { SkillsComponent } from './about/skills/skills.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';

const appRoutes: Routes = [
  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'wizard',
    component: WizardfinishedComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
 ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, AboutComponent, PersonaldetailsComponent, ContactdetailsComponent, SkillsComponent, WorkexperienceComponent, WizardfinishedComponent ],
  bootstrap:    [
  AppComponent ]
  
})
export class AppModule { }
