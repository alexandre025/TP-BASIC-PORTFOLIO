"use strict";

$(document).ready(function() {
  // Bind click on nav button
  $(".navbar-toggler").on("click", function() {
    // Get target of the click action from data attrs
    var target = $(this).data("target");

    $(target).toggleClass("show");
  });

  // Bind click on each nav link
  $(".nav-link").on("click", function(event) {
    // Prevent browser default behavior
    event.preventDefault();

    // Remove all current active
    $(".nav-item").removeClass("active");

    // Set the new active item
    $(this)
      .parent()
      .addClass("active");

    // Get href value (target id <> anchor)
    var target = $(this).attr("href");

    // Get the top position of the target container
    var scrollValue = $(target).offset().top;

    // Scroll to this position
    $("html, body").animate({ scrollTop: scrollValue }, 1000);
  });

  $(window).on("scroll", function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll);
  });
});
