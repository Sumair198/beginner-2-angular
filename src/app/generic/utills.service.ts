import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtillsService {

  constructor(private toastr : ToastrService) { }

  showSuccess(message  :any)
  {
    this.toastr.success(message  ,'Success' , {closeButton : true})
  }
}
