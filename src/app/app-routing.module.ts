import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactinfoComponent } from './Contact/contactinfo/contactinfo.component';
import { HomepageComponent } from './Contact/homepage/homepage.component';
import { RegisterComponent } from './Contact/register/register.component';
import { UserloginComponent } from './Contact/userlogin/userlogin.component';

const routes: Routes = [
  {path:'Contact/register',
  component:RegisterComponent
  },
  {path:'Contact/userlogin',
  component:UserloginComponent
  },
  {path:'Contact/contactinfo',
  component:ContactinfoComponent
  },
  {path:'Contact/homepage',
  component:HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
