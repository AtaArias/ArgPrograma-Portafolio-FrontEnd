import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  reloadPage(){
    location.reload()
  }

  bannerImageUrl:string;

  constructor(public authService: AuthService){
    this.bannerImageUrl = "https://www.glowgraphics.co.uk/wp-content/uploads/2017/12/portfolio-banner.jpg";
  }
}
