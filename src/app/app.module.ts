import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueResultsComponent } from './components/catalogue-results/catalogue-results.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerSummaryComponent } from './components/trainer-summary/trainer-summary.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'
import { CataloguePage } from './pages/catalogue/catalogue.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    NavbarComponent,
    LoginFormComponent,
    CatalogueResultsComponent,
    TrainerSummaryComponent,
    PokemonListComponent,
    CataloguePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
