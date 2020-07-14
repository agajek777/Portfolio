import { Component, OnInit, Inject, HostListener, AfterViewInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log(AOS);
  }

  ngOnInit(): void {
    AOS.init();
  }

  scroll(element: HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollTop(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
