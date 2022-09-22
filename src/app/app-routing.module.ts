import { ListPetsComponent } from './pages/list-pets/list-pets.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'add-pet', component: AddPetComponent},
  {path: 'list-pets', component: ListPetsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/landing'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
