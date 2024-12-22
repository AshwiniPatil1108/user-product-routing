import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userInfo ! : Iusers;
userId!:string
  constructor(
    private _userService : UsersService,
    private _routes : ActivatedRoute,
    private _router: Router,

  ) { }

  ngOnInit(): void {
    this._routes.params
                  .subscribe((params:Params)=>{
                    this.userId = params['userId'];
                    this.userInfo = this._userService.fetchUser(this.userId)
                  })
  }
  onEdit(){
    this._router.navigate(['edit'],{
      relativeTo : this._routes,
      queryParamsHandling:'preserve'
    })
  }
  onRemove(){
    let  getConfirm = confirm('Are you sure ?')
    if(getConfirm){
     this._userService.removeUser(this.userId)
    }
    
  }
}
