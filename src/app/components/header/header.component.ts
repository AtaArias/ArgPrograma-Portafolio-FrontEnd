import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  bannerImageUrl:string;

  constructor(){
    this.bannerImageUrl = "https://www.glowgraphics.co.uk/wp-content/uploads/2017/12/portfolio-banner.jpg";
  }
}
