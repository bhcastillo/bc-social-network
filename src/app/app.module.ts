import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
//Components
import { AppComponent } from './app.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoryEditComponent } from './components/story-edit/story-edit.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryFormComponent } from './components/story-form/story-form.component';

//Services
import { StoriesService } from './services/stories.service';
import { AlertMessageService } from './services/alert-message.service';
//Pipes
import { ImagePhotoPipe } from './pipes/image-photo.pipe';

export function hljsLanguages() {
  return [{ name: 'json', func: json }];
}

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    NavbarComponent,
    StoryEditComponent,
    StoriesComponent,
    StoryFormComponent,
    ImagePhotoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
  
  ],
  providers: [StoriesService, AlertMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
