import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router :Router
  ) { }

  ngOnInit(): void {
  }
  gotoUser(){
    this._router.navigate(['users'])
  }
  gotoProduct(){
    this._router.navigate(['products'])
  }
}
