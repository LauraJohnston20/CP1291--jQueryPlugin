(function($) {
    $.fn.conversionPopup = function(options) {

        var settings = $.extend( {
           overlay: 'rgba(0, 0, 0, 0.5)',
           closeButton: {
                src: null,
                width: "20px",
                height: "30px"
           },
           conversionDisplay: {
                background: 'rgba(255, 255, 255, 0.5)',
                border: "5px solid #ffffff",
                borderRadius: "15px"  
           }
        }, options)

        return this.each(function() {

            var $overlay, $closeButton, $conversionDisplay;
            setOverlayProperties();
            setCloseButtonProperties();
            displayConversionInfo();

            $(this).find("#convert").on("click", function(event) {
                // if volume not entered/ unit not chosen alert message should appear
                event.preventDefault();
                $overlay.css({opacity: 0.1}).show().animate({opacity: 1});
                $conversionDisplay.css({opacity: 0.1}).show().animate({opacity: 1});
            });

            function displayConversionInfo() {
                $conversionDisplay = $('<div></div>');
                $conversionDisplay.css({
                    "height": "200px",
                    "width": "400px",
                    "margin":"0 auto",
                    "position":"sticky",
                    "z-index":"10",
                    "down": "20px",
                    "display":"none",
                    "background": settings.conversionDisplay.background,
                    "border": settings.conversionDisplay.border,
                    "border-radius": settings.conversionDisplay.borderRadius
                    
                });
                $("body").append($conversionDisplay);
            };

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
                $conversionDisplay.hide();
            })

        });
    }
}(jQuery));
