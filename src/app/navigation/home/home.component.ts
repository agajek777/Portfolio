import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(element: HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollTop() {
    window.scrollTo(0,0);
  }
}
