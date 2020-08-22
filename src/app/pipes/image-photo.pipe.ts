import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagePhoto'
})
export class ImagePhotoPipe implements PipeTransform {
  transform(path: string): string {
    
    return `${environment.URI}/${path}`;
  }
}
