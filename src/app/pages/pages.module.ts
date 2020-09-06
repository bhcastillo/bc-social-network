import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { HighlightModule } from 'ngx-highlightjs';
import { ScrollingModule } from '@angular/cdk/scrolling';
//components
import { HomeComponent } from './home/home.component';
import { StoryEditComponent } from './story-edit/story-edit.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryFormComponent } from './story-form/story-form.component';
//Pipes
import { ImagePhotoPipe } from '../pipes/image-photo.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    StoryEditComponent,
    StoriesComponent,
    StoryFormComponent,
    ImagePhotoPipe,
  ],
  exports: [
    HomeComponent,
    StoryEditComponent,
    StoriesComponent,
    StoryFormComponent,
  ],
  imports: [CommonModule, ScrollingModule],
})
export class PagesModule {}
