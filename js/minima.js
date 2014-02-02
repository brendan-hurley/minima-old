(function($) {
  $(document).ready(function() {
    $('html').addClass('js');

    //
    // Tabsets.
    //
    $('.tabset__nav a').click(function(event) {
      event.preventDefault();

      if (!$(this).parent().hasClass('is-active')) {
        // Hide all tabset panes.
        $(this).parents('.tabset:first').find('> * > .tabset__pane').hide()

        // Show the pane the user clicked on.
        .siblings($(this).attr('href')).show().trigger('minimaAfterTabShow');

        // Update the active nav tab.
        $(this).parent().addClass('is-active').siblings().removeClass('is-active');
      }
    });

    // Make it possible to jump straight to a tabset pane via the URL fragment.
    if (location.hash != '') {
      $('.tabset__nav a').filter(function() {
        return $(this).attr('href') == location.hash;
      }).trigger('click');
    }

    //
    // Accordions.
    //
    $('.accordion').each(function() {
      var options = $.extend({
        duration: 'normal'
      }, $(this).data());

      $(this).find('.accordion__heading a').each(function() {
        var $accordion_item = $(this).parents('.accordion__item');

        $(this).click(function(event) {
          event.preventDefault();

          if (!$accordion_item.hasClass('is-active')) {
            // Close the currently open item.
            $accordion_item.siblings().children('.accordion__body').slideUp(options.duration);

            // Open the clicked item and update the element classes.
            $accordion_item.children('.accordion__body').slideDown(options.duration, function() {
              $accordion_item.addClass('is-active').siblings().removeClass('is-active');
            });
          }
        });
      });

      // Open the first item in each accordion.
      $(this).children(':first').addClass('is-active');
    });
  });
})(jQuery);
