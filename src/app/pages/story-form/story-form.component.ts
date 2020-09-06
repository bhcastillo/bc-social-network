import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { StoriesService } from 'src/app/services/stories.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertMessageService } from 'src/app/services/alert-message.service';
//interfaces
import { IAuth } from '../../interfaces/Auth';


interface HtmlInputEvent extends Event {
  target: EventTarget & HTMLInputElement;
}
@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {
  file: File;
  photoSelected: string | ArrayBuffer;
  hideAlertFile: Boolean = true;
  hideAlertTitle: Boolean = true;
  profile:IAuth;
  constructor(private storiesService: StoriesService,private auth:AuthService, private router: Router, private alertMessageService:AlertMessageService) {
    this.photoSelected = '';
  }
  async ngOnInit() { 
    await this.auth.userProfile$.subscribe( res =>this.profile= res);
  
  }
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File> event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result as string);
      reader.readAsDataURL(this.file);
      this.hideAlertFile = true;
    }
  }
  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.alertMessageService.showAlertUploading();
    if (!this.file){
      this.storiesService
      .postStoryImageEmpty(this.profile.sub,this.profile.nickname, title.value, description.value)
      .subscribe(
        (res) => {
          this.alertMessageService.showAlertSaved()
          this.router.navigate(['/stories'])},
        (error) => this.alertMessageService.showAlertError()
      );
    }else{
      this.storiesService
      .postStory(this.profile.sub,this.profile.nickname,title.value, description.value, this.file)
      .subscribe(
        (res) =>{
          this.alertMessageService.showAlertSaved()
          this.router.navigate(['/stories'])
        }, 
        (error) => this.alertMessageService.showAlertError()
      );
    }
    return false;
  }
}