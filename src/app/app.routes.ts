import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingleComponent } from './single/single.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{path: '',component:HomeComponent},
{path: 'contact',component:ContactComponent},
{path: 'login',component:LoginComponent},
{path: 'signup',component:SignupComponent},
{path: 'single/:id',component:SingleComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }