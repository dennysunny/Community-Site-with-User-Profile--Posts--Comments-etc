import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { ProfilhomeComponent } from './Profile/profilhome/profilhome.component';
import { AdminComponent } from './Admin/admin/admin.component';


const routes: Routes = [
  {path :'', pathMatch : 'full', redirectTo : '/home'},
  {path :'home', component : HomepageComponent},
  {path :'profile', component : ProfilhomeComponent},
  {path: 'profile/:id', component: ProfilhomeComponent },
  {path :'admin', component : AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
