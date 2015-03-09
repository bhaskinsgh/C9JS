
//
//  C9JSLesson16.js
//
//  Created:  2015-01-19  BGH
//

function OnLoadEventHandler() {

    // document.getElementById("hidimgBobHead").onclick =
    //     function () {
    //         alert("You clicked Bob");
    //     }
}


//
//  NOTICE JQUERY EVENT HANDLER CODE HAS TO BE A FUNCTION
//  IT CAN'T BE MULTIPLE LINES OF CODE OR A SINGLE LINE OF CODE!!!!!!!!!!!!!!!
//
jQuery(document).ready(function () {

    //
    //    $("#hidimgBobHead").click(
    //        function () {
    //            alert("You clicked ...");
    //        });
    //
    //         document.getElementById("hidimgBobHead").onclick =
    //             function () {
    //                 alert("You clicked Bob");
    //             }
    //


    //  Initialize Bob game

    // Initialize the score
    var nScore = 0;

    // Hide success paragraph and initialize a custom fading animation flag
    $("#hidpSuccess").data("bfading", false);
    $("#hidpSuccess").hide();

    // Set StartOver button/div presentation style to that of the cursor not hovered
    $("#hiddivStartOver").addClass("hoverOut");



    // On jQuery click hidimgBobHead, increment and display score, 
    // plus slow show success message, then immediately fade out
    $("#hidimgBobHead").click(
        function () {
            nScore++;
            $("#hidspanScore").text(nScore);

            // Dollar Sign represents the boolean not opertor in JavaScript
            if (!($("#hidpSuccess").data("bFading"))) {

                $("#hidpSuccess").data("bFading", true);
                $("#hidpSuccess").show("slow").fadeOut(1300,
                    // Second fadeOut parameter indicates function to execute
                    // after the specified fadeOut animation completes
                    function () { $(this).data("bFading", false); }
                 );
            } // if
        } // function
     ); // click


    // Multiple handlers for jQuery hover in/out hiddivStartOver 
    $("#hiddivStartOver").hover(
        // First argument is anonymous function for hover in parameter to jQuery hover
        // event handler.  Reinitialize the global/document-level score integer and associated
        // html element and the change the Start Over div's appearance, by adding the ".hoverIn"
        // class, which has a CSS description (currently background-color red, color yellow). 
        function () {
            nScore = 0;
            $("#hidspanScore").text(nScore);
            $(this).addClass("hoverIn").removeClass("hoverOut");
        },
        // Second argument is anonymous function for hover out parameter to jQuery hover
        // event handler.  Set the Start Over div's appearance, by adding the ".hoverOut"
        // class, which has a CSS description (currently background-color yellow, color red). 
        function () {
            $("#hiddivStartOver").addClass("hoverOut").removeClass("hoverIn");
        }
     );

});











