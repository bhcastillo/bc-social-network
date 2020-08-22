import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//Services
import { StoriesService } from 'src/app/services/stories.service';
import { AlertMessageService } from 'src/app/services/alert-message.service';
//Interfaces
import { Story } from 'src/app/interfaces/Story';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent implements OnInit {
  imageEmpty:string = 'assets/img/not-valid.jpg';
  id: string;
  story: Story;
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private storiesService: StoriesService, private alertMessage:AlertMessageService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.storiesService.getStory(this.id).subscribe(
        (res) => {
          this.story = res;
        },
        (err) => this.alertMessage.showAlertError()
      );
    });
  }
  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.storiesService.updateStory(this.id, title.value, description.value)
      .subscribe(
        (res) =>{
          this.alertMessage.showAlertUpdate()
          this.router.navigate(['/stories']) 
        },
        (err) => this.alertMessage.showAlertError()
      );
    return false;
  }
   deletePhoto(id: string) {
    this.storiesService.deleteStory(id).subscribe(
         (res) => {
           this.alertMessage.showAlertDelete()
           this.router.navigate(['/stories']);
         },
         (err) => this.alertMessage.showAlertError()
       );
  } 
}
