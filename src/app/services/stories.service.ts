import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//Interfaces
import { Story } from '../interfaces/Story';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  URI = environment.URI;
  constructor(private http: HttpClient) {}

  postStory(idAuth0: string, username: string, title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('idAuth0', idAuth0);
    fd.append('username', username);
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(`${this.URI}/api/story`, fd);
  }
  postStoryImageEmpty(idAuth0: string, username: string,title: string, description: string) {
    const fd = { idAuth0, username, title, description };
    return this.http.post(`${this.URI}/api/story-image-empty`, fd);
  }
  getStories() {
    return this.http.get<Story[]>(`${this.URI}/api/stories`);
  }
  getStory(id: string) {
    return this.http.get<Story>(`${this.URI}/api/story/${id}`);
  }
  getIdAuth0Story(id: string) {
    return this.http.get(`${this.URI}/api/idAuth0/${id}`);
  }
  updateStory(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/api/story/${id}`, { title, description });
  }
  deleteStory(id: string) {
    return this.http.delete(`${this.URI}/api/story/${id}`);
  }
}
