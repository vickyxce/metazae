import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ContactusComponent} from './contactus/contactus.component';
import { AboutComponent} from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DevservicesComponent } from './devservices/devservices.component';
import { WealthservicesComponent } from './wealthservices/wealthservices.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactusComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'development', component: DevservicesComponent},
  {path: 'wealth', component: WealthservicesComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
