import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  isCategories = false;
  images=["../../../../assets/images/banner1.jpg","../../../../assets/images/banner2.jpg","../../../../assets/images/banner3.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
