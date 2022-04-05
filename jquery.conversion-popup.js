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
                fontSize: "large",
                fontFamily: "sans-serif",
                textAlign: "center",
                textColor: "black"
           },
        }, options)

        return this.each(function() {

            var $overlay, $closeButton, $conversionDisplay;
            setOverlayProperties();
            setCloseButtonProperties();
            displayConversionInfo();
            
            $(this).find("#convert").on("click", function(event) {
                event.preventDefault();

                let initialVolume = parseFloat($("#initial_volume").val());
                let initialUnit = $("#initial_unit").val();
                let finalUnit = $("#final_unit").val();

                if (initialVolume === "" || isNaN(initialVolume)) {
                    alert("Please enter a valid decimal value for initial volume.")
                }
                else if (initialUnit === "Initial Unit" || finalUnit === "Final Unit") {
                    alert("Please select initial and final volume units.")
                }
                else if (initialUnit === finalUnit) {
                    alert("Please select different units for initial and final volumes.")
                }
                else{ 
                    if ($.isFunction(settings.open)) {
                        settings.open.call(this);
                    }
                    $overlay.css({opacity: 0.1}).show().animate({opacity: 1});
                    $conversionDisplay.css({opacity: 0.1}).show().animate({opacity: 1});
                    let finalVolume = parseFloat(calculateConversion(initialVolume, initialUnit, finalUnit).toFixed(3));
                    $conversionDisplay.append(`\nTry using ${(finalVolume)} ${(finalUnit).toLowerCase()}(s) instead of ${initialVolume} ${initialUnit.toLowerCase()}(s)!`)
                }
            });

            function displayConversionInfo() {
                $conversionDisplay = $(`<div class="result"></div>`);
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
                    "border-radius": settings.conversionDisplay.borderRadius,
                    "font-size": settings.conversionDisplay.fontSize,
                    "font-family": settings.conversionDisplay.fontFamily,
                    "text-align": settings.conversionDisplay.textAlign,
                    "color": settings.conversionDisplay.textColor                    
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
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume / 6;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume / 96;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 192;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 5;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 203;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 768;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume / 3.325;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 5745;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 202884;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Tablespoon") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 3;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume / 16.231;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume / 2;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume / 32;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 64;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 15;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 67.628;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 256;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume / 1.108;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 1915;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 67628;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Cup") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 50;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 16.67;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume * 8.115;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume / 1.972;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 3.943;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 250;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 4.167;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 15.773;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 14.646;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 118;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 4167;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Fluid ounce") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 6;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 2;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume / 8;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume / 16;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 32;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 29.574;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 33.814;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 128;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 1.805;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 958;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 33814;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Pint") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 96;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 32;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume * 1.972;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume * 16;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 2;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 473.176;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 2.113;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 8;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 28.875;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 59.844;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 2113;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Quart") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 192;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 64;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume * 3.943;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume * 32;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume * 2;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 946.353;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 1.057;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 4;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 57.75;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 29.922;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 1057;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Millilitre") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume / 5;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume / 15;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume / 250;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume / 29.574;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume / 473.176;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume / 946.353;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume / 1000;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 3785.41;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume / 16.387;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 28317;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 1000000;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Litre") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 200;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 66.67;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume * 4;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume * 33.814;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume * 2.113;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume * 1.057;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 1000;
                        return finalVolume;
                    }
                    else if (finalUnit == "Gallon") {
                        finalVolume = initialVolume / 3.785;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 61.024;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 28.317;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 1000;
                        return finalVolume;
                    }
                }
                if (initialUnit == "Gallon") {
                    if (finalUnit == "Teaspoon") {
                        finalVolume = initialVolume * 768;
                        return finalVolume;
                    }
                    else if (finalUnit == "Tablespoon") {
                        finalVolume = initialVolume * 256;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cup") {
                        finalVolume = initialVolume * 15.773;
                        return finalVolume;
                    }
                    else if (finalUnit == "Fluid ounce") {
                        finalVolume = initialVolume * 128;
                        return finalVolume;
                    }
                    else if (finalUnit == "Pint") {
                        finalVolume = initialVolume * 8;
                        return finalVolume;
                    }
                    else if (finalUnit == "Quart") {
                        finalVolume = initialVolume * 4;
                        return finalVolume;
                    }
                    else if (finalUnit == "Millilitre") {
                        finalVolume = initialVolume * 3785;
                        return finalVolume;
                    }
                    else if (finalUnit == "Litre") {
                        finalVolume = initialVolume * 3.785;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic inch") {
                        finalVolume = initialVolume * 231;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic foot") {
                        finalVolume = initialVolume / 7.481;
                        return finalVolume;
                    }
                    else if (finalUnit == "Cubic metre") {
                        finalVolume = initialVolume / 264;
                        return finalVolume;
                    }
                }
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
                if ($.isFunction(settings.close)) {
                    settings.close.call(this);
                }
                $conversionDisplay.empty();
                $overlay.hide();
                $conversionDisplay.hide();
            })
        });
    }
}(jQuery));
