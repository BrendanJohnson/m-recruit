jQuery(document).ready(function($){

    console.log('check cloudcannon cookie')
    console.log('cc: ' + document.cookie.indexOf("_cloud_cannon_session"));
    //if cookie hasn't been set display the region select...
    if ((document.cookie.indexOf("RegionSelected")<0) && (document.cookie.indexOf("_cloud_cannon_session")<0)) {
        $("#regionSelectModal").modal("show");
        //Modal has been shown, now set a cookie so it never comes back
        $("#regionSelectModalClose").click(function () {
            $("#regionSelectModal").modal("hide");
        });
    }

    $('.set-cookie-au').bind('click', function() {
      document.cookie = "RegionSelected=au; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }); 

    $('.set-cookie-fr').bind('click', function() {
      document.cookie = "RegionSelected=fr; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }); 

    $('.set-cookie-uk').bind('click', function() {
      document.cookie = "RegionSelected=uk; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }); 

    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });


    // Smooth on external page
    $(function() {
      setTimeout(function() {
        if (location.hash) {
          /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
          window.scrollTo(0, 0);
          target = location.hash.split('#');
          smoothScrollTo($('#'+target[1]));
        }
      }, 1);

      // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          smoothScrollTo($(this.hash));
          return false;
        }
      });

      function smoothScrollTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
    
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down            
            $('nav').removeClass('nav-down').addClass('nav-up'); 
            $('.nav-up').css('top', - $('nav').outerHeight() + 'px');
           
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {               
                $('nav').removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');             
            }
        }

        lastScrollTop = st;
    }
        
    $('.site-content').css('margin-top', $('header').outerHeight() + 'px');  
    
    // spoilers
     $(document).on('click', '.spoiler', function() {
        $(this).removeClass('spoiler');
     });
    
 });   
