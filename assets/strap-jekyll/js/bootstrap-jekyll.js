/* global jQuery */
(function($) {
    "use strict";

    // GENERAL
    $('.dropdown-toggle').dropdown();

    // FOOTER
    $('.btn-group .btn[data-href]:not(.disabled)').on('click', function() {
        var $this = $(this),
        href = $this.data('href'),
        target = $this.data('target') || '_blank';

        if (target === '_self') {
            window.location = href;
        } else {
            window.open(href, target);
        }
    }).each(function() {
        var $this = $(this);

        $this.tooltip({
            placement: 'top',
            title: $this.data('href')
        })
    });

    $('#content h5[id]').each(function() {
        var $this = $(this);

        $this.on('click', function() {
            var $this = $(this);

            window.location.hash = $this.attr('id');
        })
    });
})(jQuery);