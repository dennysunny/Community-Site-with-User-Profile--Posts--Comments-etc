import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { ProfilhomeComponent } from './Profile/profilhome/profilhome.component';
import { AccountInterceptor } from './account.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './Admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfilhomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS ,useClass : AccountInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
