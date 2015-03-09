
//
//  C9JSLesson14.js
//
//  Created:  2015-01-13 BGH
//


//
//  Call the jQuery function, passing in the entire DOM as the context
//  in order to get a reference (through jQuery) to the DOM.
//
var ojQueryDOM = jQuery(document)
//
//  Set jQuery's DOM .ready event handler to a simple anonymous function.
//  An anonymous function is used, instead of a named function, because
//  initialization code is generally called only once.
// 
ojQueryDOM.ready(
    function () {
        // Page initialization 
        alert("Page initialization on jQuery(document).ready");
    }
);


//
//  This can be combined as...
//
jQuery(document).ready(
    function () {
        // Page initialization 
        alert("Page initialization on jQuery(document).ready");
    }
);


//
//  Also, note that the $ sign is an alias for the jQuery() function
//  (as well as the object returned by the jQuery function?)
//
    $(document).ready(
    function () {
        // Page initialization 
        alert("Page initialization on jQuery(document).ready");
    }
);


//
//  Further, the $ sign can be used to not only alias jQuery(),
//  but it can also be used to alias jQuery(document).ready !!!!!!!!!!!
//
$(
    function () {
        // Page initialization 
        alert("Page initialization on jQuery(document).ready");
    }
);



//
//  jQuery reference arguments are (most commonly) CSS selectors 
//
//  I.e.
//
//      $("p")     <--    Returns a collection of jQuery object references to all HTML paragraph
//                      elements in the current document/page
//
//      $("#hidLearnVisualStudioAnchor")     <--    Returns a (length 1) collection of jQuery object references
//                                                to all the elements with the specified HTML id
//
//      $(".LessonDescription")              <--    Returns a collection of jQuery object references to all the
//                                                elements having class specified as LessonDescription
//
//      $("document")                        <--    Returns a collection of jQuery object references to ALL
//                                                objects in the current Document Object Model




    function OnLoadEventHandler() {
        //
        //  For development purposes only, resize the
        //  browser window to 50% of the screen and
        //  dock left, so I continue to view the MVA
        //  video at 50% docked right while debugging
        //  the current lesson. 
        //

        // I.e. Dock left, THEN resize to 50% ?

        // window.resizeTo(...)


        //
        //  Note that HTML elements shouldn't be visually animated, etc, 
        //  until after the page load has completed.
        //
        //  If animation etc was attempted on jQuery ready, there's no 
        //  guarantee the affected page elements would be rendered yet.
        //
        $("p").fadeOut(2000);
        $("p").fadeIn(2000);


        //
        //  Notice again how highly polymorphic jQuery is....
        //
        //  Here, just providing a single HTML string argument invokes the jQuery method
        //  whose signature/prototype specifies a single HTML string parameter.
        //
        //  The implicit "HTML method" inserts the specified html string into the currently
        //  instantiated DOM.   FALSE  -  It only instantiates the HTML document objects specified
        //
        //
        //  $("<div><img src='Banner.jpg' alt='Dynamic banner displayed here...' /></div>");
        //  It simply instantiates a jQuery object literal, but doesn't append it to the current DOM?
        //
        //  This is the same as $.parseHTML(...)
        //
        //  See also http://api.jquery.com/jQuery/#jQuery2
        //
        $("#l14_pFirst").append("<div id='hidProfilePicDiv'><img src='ProfilePicture.jpg' alt='Profile picture displayed here' /></div>");
        //
        //  Equivalently...
        //
        oNewDynamicHTMLBanner = $("<div><img src='Banner.jpg' alt='Dynamic banner displayed here...' /></div>");
        $("#hidProfilePicDiv").append(oNewDynamicHTMLBanner);
        //
        //  NO... document.getElementById("hidProfilePicDiv").appendChild(oNewDynamicHTMLBanner);
        //  YES... $( "<p id='test'>My <em>new</em> text</p>" ).appendTo( "body" );
        //
        //
        //  See also various jQuery html insertion, removal, and replacement methods at
        //  http://api.jquery.com/category/manipulation/dom-replacement/
        //
        //  Also, straight JavaScript html manipulation functions.
        //
        //

        //
        //   JQUERY CAN BE USED TO
        //   ISOLATE/ENCAPSULATE FUNCTIONS AND OBJECTS
        //   OUTSIDE OF THE DOCUMENT NAMESPACE,
        //
        //   AND INSTEAD DECLARE THEM INSIDE THE JQUERY NAMESPACE, AS FOLLOWS::
        //
        //   NOTE THAT NAMESPACES CAN BE DECLARED WITHOUT JQUERY, BUT SOME PROGRAMMERS FALL BACK ON JQUERY INSTEAD.
        //
        //
        //  jQuery can be used to easily create dynamic html
        //
        $.staticHelloWorld = function () { alert("Hello from dynamic function, staticHelloWorld()!"); };
        $.staticHelloWorld();
        //
        //  It seems that the newly defined function should be callable
        //  directly from the document as follows, but it is not.
        //
        //  window.document.staticHelloWorld();
        //


        //
        //  Object literals can be instantiated in the DOM via jQuery as follows:
        //
        $.LightBox = {
            show: function () { },
            hide: function () { },
            position: function () { },
            initiate: function () { }
        }


        //
        //  Note the jQuery function (and jQuery methods) always returns a jQuery object.
        //  This means jQuery methods can be "chained" as follows:
        //
        alert("JQuery functions always return a jQuery object,\n" +
            "which means they can be chained with the dot notation");
        $("#FirstElemAfterHeader").fadeOut(2000).fadeIn(2000);


        //
        //  FINALLY, IT SHOULD BE NOTED THAT JQUERY IS MOST COMMONLY USED TO ACCESS,
        //  QUERY, OR MANIPULATE HTML ELEMENTS, BY PASSING A CSS SELECTOR INTO THE
        //  JQUERY FUNCTION.
        //


        //
        //  The jQuery .text property allows manipulation of the text displayed
        //  within an open and close html tag set, WITHOUT USING JavaScripts
        //  depricated .innerHTML() property...    (TEXT ONLY)
        //
        $("#FirstElemAfterHeader").text("LESSON 14 | GETTING STARTED WITH JQUERY");


        //
        //  Alternately, the inner HTML can be accessed with jQuery's .html property...
        //  (TEXT OR HTML)
        //
        //  $("#l14_pFirst").html("<h2>Great Quotes:</h2>");
        //


        //
        //  jQuery's .append() and .prepend() methods attach the specified HTML
        //  INSIDE the html element designated by the supplied CSS selector... 
        //
        $("#l14_pFirst").prepend("<h2>Great Quotes:<h2>");
        $("#l14_pSecond").append("<h3>... for you to ponder ...</h3>");


        //
        //  jQuery's .before(), .after(), .insertBefore(), and .insertAfter()
        //  attach the specified HTML
        //  OUTSIDE the html element designated by the supplied CSS selector.
        //


        $("#hidLearnVisualStudioAnchor").attr("href", "http://channel9.msdn.com");
        $("#hidLearnVisualStudioAnchor").text("Visit Channel 9 at MSDN.com");
        $("#hidLearnVisualStudioAnchor").attr("id", "hidChannel9Anchor");


        $("#FirstElemAfterHeader").addClass("standout");

    }  // onLoad

















