import { DOCUMENT } from '@angular/platform-browser';
import { AfterViewInit, Component, HostListener, Inject, Injectable, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    $('.first_fade').hide();
    $('.second_fade').hide();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
     // alert('Maior que 100');
      $('.first_fade').fadeIn(1000).slideDown();
    }else if (number < 4) {
     //alert('Menor que 100');
    } if (number > 400) {
      $('.second_fade').fadeIn(1000).slideDown();
    }

  }

ngAfterViewInit() {
    $(document).ready(function(){

       /* $('h3').each(function(){
          let y = $(document).scrollTop();
          let t = $(this).parent().offset().top;
          alert(y);
          if (y > t) {
              $(this).fadeIn();
          } else {
              $(this).fadeOut();
          }
      }); */

    });
  }

}
