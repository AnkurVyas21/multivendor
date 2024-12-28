import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-listingdetails',
  templateUrl: './listingdetails.component.html',
  styleUrls: ['./listingdetails.component.css']
})
export class ListingdetailsComponent {

  constructor(public dialog: MatDialog)
  {

  }

  opendialogBox(type:string)
  {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      data:{dialogType:type},
      width: '500px',
      height: '800px',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
