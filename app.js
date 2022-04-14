$("#volumeConversion").conversionPopup({
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
    open: function() {
        console.log("opened")
    },
    close: function() {
        console.log("closed")
    }
 });
 