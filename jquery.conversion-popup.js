(function($) {
    $.fn.conversionPopup = function(options) {

        var settings = $.extend( {
           overlay: 'rgba(0, 0, 0, 0.5)',
           closeButton: {
               src: null,
               width: "20px",
               height: "30px"
           }
            
        }, options)

        return this.each(function() {

            var $overlay, $closeButton;
            setOverlayProperties();
            setCloseButtonProperties();

            $(this).find("#convert").on("click", function(event) {
                // if volume not entered/ unit not chosen alert message should appear
                event.preventDefault();
                $overlay.show();
            })

            function setOverlayProperties() {
                $overlay = $('<div></div>');
                $overlay.css({
                    "background": settings.overlay,
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

            function setCloseButtonProperties() {
                var prop = {
                    "color": "white",
                    "cursor": "pointer",
                    "font-size": "20px",
                    "width": settings.closeButton.width,
                    "height": settings.closeButton.height,
                    "position": "absolute",
                    "top": "5px",
                    "right": "5px",
                    "border": "0px",
                    "z-index": "1"
                };

                if (settings.closeButton.src) {
                    $closeButton = $('<img>');
                    $closeButton.attr("src", settings.closeButton.src);
                } else {
                    $closeButton = $('<span>X</span>');
                }

                $closeButton.css(prop);
                $overlay.append($closeButton);
            }

            $closeButton.click(function () {
                $overlay.hide();
            })

        });
    }
}(jQuery));
