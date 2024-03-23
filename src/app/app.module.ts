import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PhraseTextComponent } from './components/phrase-text/phrase-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PhraseTextComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
