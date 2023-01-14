import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { StoreComponent } from './pages/store-list/store/store.component';
import { HowItWorksComponent } from './pages/store-list/how-it-works/how-it-works.component';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/store-list/faq/faq.component';
import { AppMaterialModule } from './shared/material-module/app-material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { PlanComponent } from './pages/plan/plan.component';
import { SetupPlanComponent } from './pages/plan/setup-plan/setup-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreListComponent,
    StoreComponent,
    HowItWorksComponent,
    FaqComponent,
    FooterComponent,
    PlanComponent,
    SetupPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
