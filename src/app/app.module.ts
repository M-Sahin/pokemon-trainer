import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CatalogueResultsComponent } from './components/catalogue-results/catalogue-results.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerSummaryComponent } from './components/trainer-summary/trainer-summary.component';
import { CataloguePage } from './pages/catalogue/catalogue.component';
import { LoginPage } from './pages/login/login.component';
import { TrainerPage } from './pages/trainer/trainer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CatalogueResultsComponent,
    NavbarComponent,
    TrainerSummaryComponent,
    CataloguePage,
    LoginPage,
    TrainerPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
