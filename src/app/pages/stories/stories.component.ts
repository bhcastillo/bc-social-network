import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Services
import { StoriesService } from 'src/app/services/stories.service';
//Interfaces
import { Story } from 'src/app/interfaces/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: Story[] = [];
  constructor(private storiesService: StoriesService, private router: Router) {
  }
  
  ngOnInit() {
    this.storiesService.getStories().subscribe(
      (res) => (this.stories = res),
      (err) => console.log(err)
    );
  }
  selectedCard(id: string) {
    this.router.navigate(['/story', id]); 
  }
}
