import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'my-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'profile-page';

  ngOnInit(): void {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000);
        }
      }
    });
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-shrink');
      } else {
        $('#mainNav').removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  ngAfterViewInit(): void {
  }

  onScrollSmoothly(target): void {
    console.log('OK')
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
