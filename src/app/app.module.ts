import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import json from 'highlight.js/lib/languages/json';
//Modules
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
//Components
import { AppComponent } from './app.component';
//Services
import { StoriesService } from './services/stories.service';
import { AlertMessageService } from './services/alert-message.service';
//Pipes
import { ComponentsModule } from './components/components.module';
import { CallbackComponent } from './components/callback/callback.component';

export function hljsLanguages() {
  return [{ name: 'json', func: json }];
}

@NgModule({
  declarations: [AppComponent, CallbackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    PagesModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [StoriesService, AlertMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
