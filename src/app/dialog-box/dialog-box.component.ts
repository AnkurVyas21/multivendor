import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  constructor(  @Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<DialogBoxComponent>) {
    console.log('data',this.data)

  }

  ngOnInIt()
  {
    console.log('data',this.dialogRef)
  }
  
}
