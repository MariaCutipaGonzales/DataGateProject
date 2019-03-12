import { Component, OnInit } from '@angular/core';
import { AppRoutePath, AppRoutePathName } from '../app.router.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})

export class NavBarComponent implements OnInit {

  public routes = [
    {
      path: AppRoutePath.REVIEW,
      name: AppRoutePathName.REVIEW
    },
    {
      path: AppRoutePath.REQUESTS,
      name: AppRoutePathName.REQUESTS
    },
    {
      path: AppRoutePath.MANAGE,
      name: AppRoutePathName.MANAGE
    }
  ]
  constructor(
  ) { }

  ngOnInit() {
  }
}
