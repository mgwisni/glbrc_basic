/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $) {
  'use strict';

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.glbrc_basic = {
    attach: function (context, settings) {
      
      // Toggle for featured image caption
      $('#featured-image-info', context).click(function () {
        $('#featured-image-info-wrapper').toggleClass('glbrc-open');
      });

      $('#tab-container').easytabs();


      // Execute code once the DOM is ready. $(handler) not required
      // within Drupal.behaviors.
      $(window).on('load', function () {
        // Execute code once the window is fully loaded.

        // $("#searchModalBtn").click(function() {
        //   $("body").toggleClass("search-modal-open")
        // });
        // $("#modalClose").click(function() {
        //   $("body").toggleClass("search-modal-open")
        // });
        // $("#searchModal").click(function() {
        //   $("body").toggleClass("search-modal-open")
        // });
        // Get the modal
        var modal = document.getElementById('searchModal');
        // Get the button that opens the modal
        var btn = document.getElementById("searchModalBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementById("modalClose");
        // Get the <input> element where search text goes
        var searchbar = document.getElementById("uw-q");
        // When the user clicks on the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
            searchbar.focus();
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // $("#mobileMenuBtn").click(function() {
        //   $("body").toggleClass("mobile-menu-open")
        // });

        // $(".menu-item--expanded").click(function() {
        //   $(this).toggleClass("open")
        // });
        
      });


      $(window).on('resize', function () {
        // Execute code when the window is resized.
      });

      $(window).on('scroll', function () {
        // Execute code when the window scrolls.
      });

    }
  };

})(Drupal, jQuery);
