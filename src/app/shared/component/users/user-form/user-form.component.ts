import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
userId ! : string;
userInfo !: Iusers;
userForm !: FormGroup;
isInEdiMode : Boolean = false;
updateBtnFlag : Boolean= false;
  constructor(
    private _routes : ActivatedRoute,
    private _UserService : UsersService,
    private _uuidser : UuidService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup ({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl('Candidate', [Validators.required]),
    })
    this.userId= this._routes.snapshot.params['userId'];
    if(this.userId){
      this.isInEdiMode= true;
      this.userInfo = this._UserService.fetchUser(this.userId);
      this.userForm.patchValue(this.userInfo)
    }
    this._routes.queryParams
                    .subscribe((params:Params)=>{
                      if(params['userRole'].toLowerCase().includes('candidate')){
                        this.userForm.disable();
                        this.updateBtnFlag = true;
                      }
                    })
  }

  onUserAdd(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      let obj : Iusers={
        ...this.userForm.value,
        userId: this._uuidser.generateUuid()
      }
      this.userForm.reset()
      this._UserService.postUser(obj)
    }
  }

  onUserUpdate(){
    let updatedobj :Iusers ={
      ...this.userForm.value,
        userId:this.userId
    }
    console.log(updatedobj);
    this.userForm.reset()
    this._UserService.updatedUser(updatedobj)
  }

}
