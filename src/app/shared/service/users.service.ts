import { Injectable } from '@angular/core';
import { Iusers } from '../model/user';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArr :Array <Iusers>=[
    {
      userName :"Jhon Doe",
      userId: "123",
      userRole : "Candidate"
    },
    {
      userName :"Jen Doe",
      userId: "124",
      userRole : "Admin"
    },
    {
      userName :"May Doe",
      userId: "125",
      userRole : "Candidate"
    },

  ]
  constructor(
    private _router :Router,
    private _snackBar : SnackBarService
  ) { }
  fetchAllUsers(){
    return this.userArr
  }
  fetchUser(id:string):Iusers{
    return this.userArr.find(user => user.userId === id)!
  }
  postUser(user : Iusers){
    this.userArr.push(user);
    this._router.navigate(['/users'])
    this._snackBar.openSnackBar(`New user ${user.userName} is addded successfully!!!`)
  }
  updatedUser(updatedUser : Iusers){
    let getIndex = this.userArr.findIndex(user => user.userId === updatedUser.userId);
    this.userArr[getIndex]=updatedUser;
    this._router.navigate(['/users', updatedUser.userId],{
      queryParams:{userRole : updatedUser.userRole}
    })
    this._snackBar.openSnackBar(`New user ${updatedUser.userName} is addded successfully!!!`)
  }

  removeUser(id:string){
    let getIndex = this.userArr.findIndex(user => user.userId === id);
    let obj = this.userArr.splice(getIndex,1);
    this._router.navigate(['/users']);
    this._snackBar.openSnackBar(`The user is removed successfully!!!`)
  }
  
}
