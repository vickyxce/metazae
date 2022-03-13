import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutusComponent} from './aboutus/aboutus.component';
import {CasestudiesComponent} from './casestudies/casestudies.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ProjectsComponent} from './projects/projects.component';
const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'case', component: CasestudiesComponent},
 {path: 'projects', component: ProjectsComponent},
 {path: 'contact', component: ContactusComponent},
 {path: 'about', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
