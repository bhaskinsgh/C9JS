
//
//  C9JSLessson19.js
//
//  Created:  2015-02-11 BGH
//
//

function OnLoadEventHandler() {
}


//
//  Call jqDOMReady as soon as jQuery reports that the entire
//  DOM for the page has been instantiated.
//
$(document).ready(jqDOMReady);


//
//  jqDOMReady
//
//  Initialize page-related JavaScript (event handlers, etc).
//
function jqDOMReady() {

    //
    //  Define a callback for the html anchor element, hidaGetJSON
    //
    $("#hidaGetJSON").click(

    /*
    // Provide anonymous function to handle the click event of html anchor element, hidaGetJSON
    function () {

    //  Call jQuery's getJSON method
    $.getJSON("data19.json",
    // Provide an anonymous "JSON processing function" as the second argument
    function (jqoKeyValues) {

    // Create an empty object array
    var oarJsonAsListItems = [];

    // Iterate the retrieved JSON data via the jQuery "each" function,
    // which iterates arrays by index or objects by property name.
    $.each(jqoKeyValues,
    // Provide an anonymous "each processing function" as the second argument
    // (note that the each function will supply oKey and oValue 
    // as either the index/value of each array item or the property-name/value
    // of each object property)
    function (oKey, oValue) {

    // Use JavaScript's built-in array push method to
    // add each JSON item to the object array, oarJSONItems,
    // formatted as a string representing an HTML list item (<li></li>).
    oarJsonAsListItems.push(
    "<li id='" + oKey + "'>" + oValue + "</li>");
    }
    ); // jQuery each function


    // Instantiate a jQuery object representing an HTML unordered list
    // AND append the <ul></ul> to the current document's #hidsecMain
    $('<ul />',
    // Provide an nnamed object literal containing the new html
    // element's class and html properties (per jQuery format)
    {
    class: "interest-list",
    html:  oarJsonAsListItems.join("")  // join array items w/ no separator
    }
    ).appendTo("#hidsecMain");


    }
    ); // Call to jQuery getJSON function

    }  
    */

    // Provide an anonymous function to handle the get JSON event,
    // leveraging AJAX (Asynchronous JavaScript and XML),
    // to process a hardcoded JSON (JavaScript Object Notation) data file.
    // jQuery's AJAX function supports error handling, whereas getJSON does not.
        function () {

            $.ajax(
                {
                    url: 'data19.json',
                    datatype: 'json',
                    success:
                        function (sJsonData) {
                            var oarJsonAsListItems = [];

                            joarJsonData = JSON.parse(sJsonData);

                            $.each(joarJsonData,
                                function (oKey, oValue) {
                                    oarJsonAsListItems.push(
                                        "<li id='" + oKey + "'>" + oValue + "</li>"
                                    );  // Call to array push method
                                }  // Anonymous function for call to jQuery each function
                            );  // Call to jQuery each function

                            $("<ul />",
                                {
                                    class: "interest-list",
                                    html: oarJsonAsListItems.join("")
                                }
                            ).appendTo("#hidsecMain");

                        },  // Anonymous function for Ajax success 
                    statusCode:
                    {
                        404: function () {
                            alert("A server error occurred.  Please try again later.");
                        }  // 404 status handler
                    }  // Object literal for handling any/all Ajax status codes

                }  // Object literal for AJAX call
            );  // AJAX call

        }  // Anonymous function for click handler

    );     // register click handler for #hidaGetJSON


}  // jqDOMReady function



















