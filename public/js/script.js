// SIDE NAV-BAR
$(".dot-nav--item").on("click", function() {
  ($this = $(this)), ($siblings = $this.siblings());
  $this.addClass("is-active");
  $siblings.removeClass("is-active");
});

// SMOOTH SCROLLING
$(document).ready(function() {
  $(".dot-nav--item a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

// CHANGE COLOR OF SIDE-NAV WHEN SCROLLED
$(function() {
  $(document).scroll(function() {
    var $nav = $(".dot-nav--item");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});


