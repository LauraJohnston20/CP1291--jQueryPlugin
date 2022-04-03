(function($) {
    $.fn.conversionPopup = function(options) {

    
        return this.each(function() {

            var $overlay;
            setOverlayProperties();

            $(this).find("#convert").on("click", function(event) {
                // if volume not entered/ unit not chosen alert message should appear
                event.preventDefault();
                $overlay.show();
            })

            function setOverlayProperties() {
                $overlay = $('<div></div>');
                $overlay.css({
                    "background": 'rgba(0, 0, 0, 0.5)',
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "display": "none",
                    "text-align": "center",
                    "width": "100%",
                    "height": "100%",
                    "padding-top": "5%" 
                });
                $("body").append($overlay);
            }

        });
    }
}(jQuery));