import { Injectable } from '@angular/core';

//sweetalert2
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  constructor() { }
  showAlertUploading(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Uploading to the server',
      html:'<div class="spinner-border"></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey:false,
      allowEnterKey:false,
    })
  }
  showAlertSaved(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Saved Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  showAlertUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Update Completed',
      showConfirmButton: false,
      timer: 1500
    })
  }
  showAlertDelete(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Deletion Completed',
      showConfirmButton: false,
      timer: 1500
    })
  }
  showAlertError(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Save Error',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
