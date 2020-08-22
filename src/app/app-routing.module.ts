import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { StoryFormComponent } from './components/story-form/story-form.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryEditComponent } from './components/story-edit/story-edit.component';

//Guards
import { IsAuthenticatedGuard } from './guards/isAuthenticated.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stories', component: StoriesComponent,canActivate: [IsAuthenticatedGuard] },
  { path: 'story/new', component: StoryFormComponent,canActivate: [IsAuthenticatedGuard] },
  { path: 'story/:id', component: StoryEditComponent,canActivate: [IsAuthenticatedGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
