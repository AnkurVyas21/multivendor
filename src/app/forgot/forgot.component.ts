import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../snackBar/services/snackbar.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
     email :string='';
     newPassword = ''
     copySuccess = false;

     constructor(private httpService:HttpServiceService,private snackbar: SnackbarService)
     {

     }

     forgotPassword()
     {
      const cleanEmail = this.email?.trim().toLowerCase();
       this.httpService.forgotPassword({ emailOrPhone: cleanEmail}).subscribe((value)=>{
         console.log(value)
         this.newPassword = value.temporaryPassword
         this.snackbar.show(value.message, 5000, 'success')
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

// showSnackBar(message:string,time:number) {
//     this.snackBar.open(message, '', {
//       duration: time, 
//       horizontalPosition: 'right',
//       verticalPosition: 'bottom',
//       panelClass: ['custom-snackbar']
//     });
//   }
}
