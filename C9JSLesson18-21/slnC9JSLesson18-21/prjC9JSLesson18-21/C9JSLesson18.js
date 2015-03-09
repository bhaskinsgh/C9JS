
//
//  C9JSLesson18.js
//
//  Created:  2015-01-26 BGH
//


//
//  (body) onLoad indicates the DOM is instantiated AND the page is fully rendered
//  If we attach event handlers to elements here, the user might be clicking
//  on the page before those event handlers are attached.
//
function OnLoadEventHandler() {

}


//
//  jQuery ready indicates the DOM is instantiated.
//  This is the proper place to attach event handlers.
//  It eliminates the timing issue described, above.
//
//  Note that all(?) jQuery methods require functions
//  as arguments.  These are usually anonymous functions,
//  but the name of a defined function can be supplied as
//  well (as shown below).  Note the the InitializePage 
// function is NAMED not called!
//

$(document).ready(
    InitializePage
);


//  Variables set at the window level are considered global
var gsVersion = "1.x";


//
//  A single global object can be used too implement a PSEUDO-NAMESPACE
//  All application level object literals, functions, and variables
//  are defined as part of the singleton namespace object.
//  (note global object names are usually all upper case).
//
//  THIS IS KNOWN AS A SINGLETON PATTERN for implementing a pseudo namespace
//
var C9JSLESSON18 = {};

C9JSLESSON18.sVersion = "Protected version 1.x";
C9JSLESSON18.oPlanetIntempstesta = {
    id: 8675309,
    name: "Intempstesta Nox"
};



//
//  Basics of the MODULE PATTERN for implementing pseudo namespaces
//

//
//  Anonymous closure with globals import ($ passes a reference to the entire jQuery namespace)
//  Note that globals import improves performance, because the js interpreter doesn't have to 
//  walk up the call chain to determine whether or not the (global) variables are indeed global.
//
var MODLESSON18 = (function (oPublic, $, sVersion) {
    //
    // Variables and functions defined within this anonymous function
    // have function scope (they're not accessable outside of this fn)
    // However, outside/global scope variables are accessable within the module.

    // var oPublic = {}, privateVariable = 1;  // Passing (MODLESSON18 || {}) in as oPublic
                                               // Allows separate module augmentations,
                                               // in separate js files to load IN ANY ORDER
                                               // AND to load ASYNCHRONOUSLY via a tool like LABjs

    //
    // DECLARED variables have local/function scope,
    // which essentially simulates private (namespaced) methods and properties.
    //
    // Again, as the name, MODULE PATTERN, partially indicates, we're simulating a namespace
    // by placing variables and functions WITHIN A MODULE/FUNCTION THAT RETURNS AN OBJECT.
    //
    // A better name might be the "MODULE OBJECT PATTERN"
    // THIS ACTUALLY SIMULATES TRADITIONAL CLASS CONSTRUCTION MORE THAN JUST NAMESPACE DECLARATION.
    // I.e. The pattern provides encapsulation (like a namespace) but it also suppports
    // public and private declarations, making the pattern more representative of a class
    // that contains only static/shared methods.  The "class" can never be instantiated.
    //
    // By passing in any previous defintion of "the module" to the module, we're
    // moreso simulating partial classes, that is, we're supporting module/class "augmentation."
    //
    var privateVariable = 1;
    
    function privateMethod() {
        $("#hidsecMain").append(
            "<br /><span style='margin-left:3.0em;'>" + 
            "PrivateMethod() executing via call from MODULE.PublicMethod()::" +
            "<br /><span style='margin-left:6.0em;'>privateVariable is " + 
            privateVariable + "</span>");
    }

    oPublic.PublicProperty = "Public property via the module design pattern";

    //
    // Notice that the parent anonymous function is called immediately,
    // and can only be called once (It appears that MODLESSON18 might 
    // store a reference to the defined anonymous function, but upon
    // closer inspection, you'll notice that MODLESSON18 is set to the
    // returned object literal, oPublic, not to the function itself.
    //
    // Here, the life of privateMethod() is extended beyond that one and
    // only function execution, since it's called within a member function
    // of the returned object literal, oPublic.
    //
    oPublic.PublicMethod = function () {
        privateMethod();

        var sMessage = "PublicMethod() via the module design pattern executed."
        alert(sMessage);
        return sMessage;
    };

    return oPublic;
}
(MODLESSON18 || {}, jQuery, gsVersion));   // Immediately call the defined anonymous function.
                                           // See commments above re argument MODLESSON18,
                                           // which supports module augmentation.
//
//  Notice the () around the anonymous function. This is required by the language, 
//  since statements that begin with the token, function, are always considered to be 
//  function declarations. Including () creates a FUNCTION EXPRESSION instead.
//


//
//  Example of 
//  "Loosely augmenting modules in the MODULE DESIGN PATTERN"
//
var MODLESSON18 = (function (oPublic) {
    oPublic.AnotherPublicMethod = function () {
        return ("<br />MODLESSON18.AnotherPublicMethod executed.");
    };
    return oPublic;
} (MODLESSON18 || {}) );


//
//  Structural namespace examples::
//
//      HermanMiller.MktgTech.HMDwgDirect::HMDwgDirectManager
//
//      HermanMiller.MktgTech.HMDwgDirect::Utility
//      HermanMiller.MktgTech.HMDwgDirect::Utility.hmLegacyCatCode()
//      HermanMiller.MktgTech.HMDwgDirect::Utility.hmNextAvailableSymbolNo()
//      HermanMiller.MktgTech.HMDwgDirect::Utility.ConvertPre2007CPDrawing
//          .... m_acaddocCurrent = m_OdaApplication.Documents.Open(sFullnamePre2007CPDwg) ...
//
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayers
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayers.New()
//
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer.New()
//          ' Create an hmAutoCADLayer referencing an existing DWGdirectX.IAcadLayer
//          Public Sub New(ByRef hmcpdParentDrawing As CADPack.HMCADPackDrawing, _
//              ByRef ddxAutoCADLayer As DWGdirectX.IAcadLayer)
//          ' Create an hmAutoCADLayer referencing an NEW DWGdirectX.IAcadLayer
//          Public Sub New(ByRef hmcpdParentDrawing As CADPack.HMCADPackDrawing, _
//              ByVal sLayerName As String, ByVal hmlcLayerColor As hmAutoCADColor, _
//              ByVal hmlfsLayerFreezeState As HmDwgDirect.hmLayerFreezeState)//
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//      HermanMiller.MktgTech.HMDwgDirect::hmAutoCADLayer...
//
//      HermanMiller.MktgTech.CADPack::HMCADPackDrawing
//
//
//




//
//  Tight Augmentation
//  
//  While loose augmentation is great, it does place some limitations on your module. 
//  Most importantly, you cannot override module properties safely. You also cannot use 
//  module properties from other files during initialization (but you can at run-time 
//  after intialization). TIGHT AUGMENTATION IMPLIES A SET LOADING ORDER, but allows 
//  overrides. Here is a simple example (augmenting our original MODULE):
//
//      var MODLESSON18 = (function (oPublic) {
//  	    var old_moduleMethod = oPublic.moduleMethod;
//
//  	    oPublic.moduleMethod = function () {
//		        // method override, has access to old through old_moduleMethod...
//  	    };
//
//	        return oPublic;
//      }(MODLESSON18));
//
//  Here we’ve overridden MODULE.moduleMethod, but maintain a reference to the 
//  original method, if needed.
//  
//  Note:  I contend that the pattern described above does not implement anything like
//         function overrides in class construction.  Actual overrides apply to overridden
//         methods in derived classes that inherit from base classes.  Thus, objects 
//         can be instantiated from both the base class and the derived class.
//
//         What's done above is NOTHING like that.
//
//         See my HermanMiller.MktgTech classes for a better explanation and understanding
//         of base and derived classes with overrides (I.e.  HMException)
//

//
//  Sub-modules
//  
//  Our final advanced pattern is actually the simplest. There are many good cases
//  for creating sub-modules. It is just like creating regular modules:
//  MODLESSON18.sub = (function () {
//  	var oPublic = {};
//  	// ...
//  
//  	return oPublic;
//  }());
//  
//  While this may have been obvious, I thought it worth including. Sub-modules have
//  all the advanced capabilities of normal modules, including augmentation and private state.
//



function InitializePage() {

    //  Get a jQuery object reference to the html element with id hidsecMain
    htmosecMain = $("#hidsecMain");

    // 
    //  Access singleton encapsulated properties
    //
    htmosecMain.append("The global (window) gsVersion variable has been set to \"" +
        window.gsVersion + "\"");
    htmosecMain.append("<br />C9JSLESSON18.sVersion has been set to \"" +
        C9JSLESSON18.sVersion + "\"");
    htmosecMain.append("<br />C9JSLESSON18.oPlanetIntempstesta:: " +
        C9JSLESSON18.oPlanetIntempstesta.name + " (id " +
        C9JSLESSON18.oPlanetIntempstesta.id + ")");


    //
    //  Access module encapsulated properties
    //
    htmosecMain.append("<br /><br />MODLESSON18.PublicProperty is \"" + 
        MODLESSON18.PublicProperty + "\"");
    htmosecMain.append("<br />MODLESSON18.PublicMethod() returns \"" + 
        MODLESSON18.PublicMethod() + "\"");

    alert("Attempting to access MODLESSON18.privateVariable outside of MODULE yields::" +
        "\n\n" + MODLESSON18.privateVariable);

    htmosecMain.append(MODLESSON18.AnotherPublicMethod());



    //
    //  Graceful Degradation means that the webpage should still be viewable
    //  whether or not programmatic technologies are available.  JavaScript, etc
    //  should ADD functionality, but the page should function, in some way,
    //  without it.
    //





    //
    // Rethink the following code...
    // It REQUIRES JavaScript in order to view content,
    // thus breaking the practice of "graceful degradation".
    //
    // That is, the notion that scripting should only enhance
    // the user experience and should not be required to view
    // content.
    //
    // $("#hidimgNode").click(function () {
    //     $("#hidpExpand").append("You should see this whether JavaScript is on or off.");
    // });
    // 

    
    //
    // Instead, display the "expanded text" by default in the html !!!
    // Then, using JavaScript, add the plus sign along with toggle methods,
    // and initialize the message to hidden.
    //
    $("#hidpMessage").prepend(
        "<img src='plus-8.png' alt='Click me to see the paragraph' id='hidimgNode' />");

    $("#hidimgNode").toggle(
        function () {
            $("#hidspMessage").show("fast");
            $("#hidimgNode").attr("src", "minus-8.png");
        },
        function () {
            $("#hidspMessage").hide("slow");
            $("#hidimgNode").attr("src", "plus-8.png");
        }
    );

    $("#hidspMessage").hide();


}  // InitializePage


























