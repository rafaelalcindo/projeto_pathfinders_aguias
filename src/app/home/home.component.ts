
import { DOCUMENT } from '@angular/platform-browser';
import { AfterViewInit, Component, HostListener, Inject, Injectable, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public tagHappear = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {


  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
     // alert('Maior que 100');
      $('.first_fade').fadeIn(1000).slideDown();
    }else if (number < 4) {
     //alert('Menor que 100');
      $('.first_fade').fadeOut('slow');
      $('.second_fade').fadeOut('slow');
    } if (number > 1200) {
      $('.second_fade').fadeIn(1000).slideDown();
    }

    $('.carousel').carousel({
      interval: 1000
    });

  }

ngAfterViewInit() {
    $(document).ready(function(){

    });
  }

}


