import { Component, HostListener,AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/styles/style.css']
})
export class AppComponent implements AfterViewInit {
  istoggled = false;
  title = 'metazae';
  ngAfterViewInit(): void {
    AOS.init();
  }
  constructor(private meta: Meta){
    this.meta.addTags([
      { name: 'description', content: 'This is an article about Angular Meta service' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }
    ]);
  }

  @HostListener("window:resize", []) updateDays() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)

    if (window.innerWidth >= 1200) {
      if(this.istoggled)
      this.istoggled = false
    } else if (window.innerWidth >= 992) {
      if(this.istoggled)
      this.istoggled = false
    } else if (window.innerWidth  >= 768) {
      //this.istoggled = true
    } else if (window.innerWidth < 768) {
      //this.istoggled = true
    }

  }
}
