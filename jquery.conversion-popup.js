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
                background: 'rgba(200, 200, 200, 1)',
                border: "5px solid #ffffff",
                borderRadius: "15px",
                  
           }
        }, options)

        return this.each(function() {

            var $overlay, $closeButton, $conversionDisplay, $calculateConversion;
            setOverlayProperties();
            setCloseButtonProperties();
            displayConversionInfo();
            

            $(this).find("#convert").on("click", function(event) {
                // if volume not entered/ unit not chosen alert message should appear
                event.preventDefault();

                let initialVolume = $("#initial_volume").val();
                let initialUnit = $("#initial_unit").val();
                let finalUnit = $("#final_unit").val();

                if (initialVolume == "" || isNaN(initialVolume)) {
                    alert("Please enter a valid initial volume.")
                }
                else if (initialUnit == "Initial Unit" || finalUnit == "Final Unit") {
                    alert("Please select volume units.")
                }
                else{ 
                    $overlay.css({opacity: 0.1}).show().animate({opacity: 1});
                    $conversionDisplay.css({opacity: 0.1}).show().animate({opacity: 1});
                    let finalVolume = (calculateConversion(initialVolume, initialUnit, finalUnit)).toFixed(2);
                    console.log(initialVolume);
                    console.log(initialUnit);
                    console.log(finalUnit);
                    console.log(finalVolume);
                }
            });

            function calculateConversion (initialVolume, initialUnit, finalUnit) {
                let finalVolume;
                if (initialUnit == "Teaspoon") {
                    if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume / 3;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume / 48;
                        return finalVolume;
                    }
                }
            }

            function displayConversionInfo() {
                $conversionDisplay = $('<div></div>');
                $conversionDisplay.css({
                    "width": "400px",
                    "height": "200px",
                    "position":"absolute",
                    "top": "25%",
                    "left": "50%",
                    "margin": "-100px 0 0 -200px",
                    "z-index":"999",
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
