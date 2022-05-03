import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule} from '@angular/material/icon';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { DevservicesComponent } from './devservices/devservices.component';
import { WealthservicesComponent } from './wealthservices/wealthservices.component';
import { AngularFireModule} from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment} from '../environments/environment'
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ServicesComponent,
    DevservicesComponent,
    WealthservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
