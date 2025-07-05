import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  show(message: string, duration: number = 2000, type: 'success' | 'error' | 'info' = 'info') {
    let panelClass = '';

    switch (type) {
      case 'success':
        panelClass = 'snackbar-success';
        break;
      case 'error':
        panelClass = 'snackbar-error';
        break;
      default:
        panelClass = 'snackbar-info';
    }

    const config: MatSnackBarConfig = {
      duration,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'bottom' as MatSnackBarVerticalPosition,
      panelClass: [panelClass]
    };

    this.snackBar.open(message, '', config);
  }
}
