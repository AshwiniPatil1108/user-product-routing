import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar : MatSnackBar
  ) { }
  openSnackBar(msg:string){
    this._snackBar.open(msg, "Close",{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2500
    })
  }
}
