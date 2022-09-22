import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListPetsComponent } from './pages/list-pets/list-pets.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    AddPetComponent,
    SignupComponent,
    HeaderComponent,
    WelcomeComponent,
    ListPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
