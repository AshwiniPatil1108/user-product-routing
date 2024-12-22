import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/user';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userInfo ! : Array<Iusers>
selectedUserId !: string
  constructor(
    private _userService : UsersService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userInfo = this._userService.fetchAllUsers();
    this.selectedUserId = this.userInfo[0].userId;
    this._router.navigate([ this.userInfo[0].userId],{
      relativeTo: this._routes
    })

  }

  onUserSelect(user:Iusers){
    this.selectedUserId= user.userId
  }

}
