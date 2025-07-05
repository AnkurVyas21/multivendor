import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
     email :string='';
     newPassword = ''
     copySuccess = false;

     constructor(private httpService:HttpServiceService)
     {

     }

     forgotPassword()
     {
      console.log(this.email)
       this.httpService.forgotPassword({ emailOrPhone: 'vendor1@mailinator.com' }).subscribe((value)=>{
         console.log(value)
         this.newPassword = value.temporaryPassword
       },(error)=>{
         console.log(error)
       })
     }

     copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    this.copySuccess = true;

    // Hide message after 2 seconds
    setTimeout(() => {
      this.copySuccess = false;
    }, 2000);
  }).catch((err) => {
    console.error('Could not copy text: ', err);
  });
}
}
