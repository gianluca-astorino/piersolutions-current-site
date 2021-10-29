/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 100 ) {
  //     $("#main-nav, #main-nav-subpage").slideDown(700);
  //     $("#main-nav-subpage").removeClass('subpage-nav');
  //   } else {
  //     $("#main-nav").slideUp(700);
  //     $("#main-nav-subpage").hide();
  //     $("#main-nav-subpage").addClass('subpage-nav');
  //   }
  // });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Helping you bring your ideas to life.", "Let's push the boundaries, together.", "Think. Create. Innovate."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})



//navbar
document.getElementById("nav-bar").innerHTML = '<ul class="nav-menu list-unstyled"> <li><a href="index.html" class="smoothScroll">Home</a></li> <li> <div class="dropdown"> <a href="#header" class="smoothScroll" class="dropdown">Company↓</a> <div class="dropdown-content"> <a href="index.html#about">About Us</a><a href="our-story.html">Our Story</a><a href="site-pictures.html">Portfolio</a> <a href="team.html">Leadership Team</a>  </div> </div> </li> <li><a href="index.html#services" class="smoothScroll">Services</a></li> <li><a href="#contact" class="smoothScroll">Contact</a></li> </ul>'

//footer
document.getElementById("footerr").innerHTML = '<footer class="site-footer" id="footerID"> <div class="container"> <div class="row"> <div class="col-sm-12 col-md-6"> <h6>Global Locations</h6> <ul class="footer-links"> <li><a href="#footerID">Canada</a></li> <li><a href="#footerID">United States</a></li> <li><a href="#footerID">United Kingdom</a></li> </ul> </div> <div class="col-xs-6 col-md-3"> <h6>Live Contact</h6> <ul class="footer-links"> <li><a href="tel:(289) 779-1084">General Inquiries</a></li> <li><a href="tel:(289) 779-1084">Support</a></li> </ul> </div> <div class="col-xs-6 col-md-3"> <h6>Quick Links</h6> <ul class="footer-links"> <li><a href="index.html#aboutus">About Us</a></li> <li><a href="press.html">In The Press</a></li> <li><a href="team.html">Leadership Team</a></li><li><a href="sales-team.html">Sales Team</a></li> <li><a href="careers.html">Careers</a></li> <li><a href="https://allye.ca">Our Tech</a></li> <li><a href="privacy-policy.html">Privacy Policy<br>Terms & Conditions</a></li> <li><a href="mailto:contact@inderatech.com">Contact Us</a></li> </ul> </div> </div> <hr> </div> <div class="socials-media text-center"> <a href="https://instagram.com/inderatechnologies" target="_blank"><i class="ion-social-instagram"></i></a> <a href="https://www.linkedin.com/company/inderatech" target="_blank"><i class="ion-social-linkedin"></i></a> <a href="https://twitter.com/inderatech" target="_blank"><i class="ion-social-twitter"></i></a> </div> <div class="container"> <div class="row"> <div class="col-md-8 col-sm-6 col-xs-12"> <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="#">Indera Technologies</a>. </p> </div> <div class="col-md-4 col-sm-6 col-xs-12"> <div class="logo"> <a class="twitter" href="#"><img src="./transparent-indera-logo.png" style="width: 30%;" alt="Indera Technologies"></a> </div> </div> </div> </div> </footer>'

//get in touch
document.getElementById("getintouch").innerHTML = '<div id="contact" class="paddsection"> <div class="container"> <div class="contact-block1"> <div class="row"> <div class="col-lg-6"> <div class="contact-contact"> <h2 class="mb-30">GET IN TOUCH</h2> <ul class="contact-details"> <li><span>HQ: Toronto, Canada</span></li> <li><span>PHONE: (289) 779-1084</span></li> <li><span>GENERAL INQUIRES: contact@inderatech.com</span></li> <li><span><a href="sales-team.html">Contact Sales ></a></span></li> </ul> </div> </div> <div class="col-lg-6"> <form action="https://formspree.io/f/xoqyprzw" method="POST" role="form" class="contactForm" id="sendEmail"> <div class="row"> <!-- <div id="sendmessage">Your message has been sent. Thank you!</div> <div id="errormessage"></div> --> <div class="col-lg-6"> <div class="form-group contact-block1"> <input type="email" class="form-control" id="name" name="_replyto" placeholder="Your Email"/> <div class="validation"></div> </div> </div> <!-- <div class="col-lg-12"> <div class="form-group"> <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> <div class="validation"></div> </div> </div> --> <div class="col-lg-12"> <div class="form-group"> <textarea class="form-control" name="message" rows="12" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea> <div class="validation"></div> </div> </div> <div class="col-lg-12"> <input type="submit" class="btn btn-defeault btn-send" value="Send message" onclick="myFunction()">  </div> </div> </form> </div> </div> </div> </div> </div>'
function myFunction() { let form = document.getElementsByTagName("form")[0]; form.addEventListener("submit", (e) => { e.preventDefault(); alert("Message Successfully Sent") }) } 