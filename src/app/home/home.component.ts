import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../assets/style/base.css', '../../assets/style/main.css', '../../assets/style/vendor.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(id:any):void {
    console.log(`scrolling to ${id}`);
    let el:any ='';
    el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
