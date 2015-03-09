
//
// Object Literals
// C9JSLesson12.js
//



//
//  JavaScript object literals are not instantiated from defined classes.
//  Rather, they are simply declared without specifying any class.
//  A little bit similar to a C structure.
//
//  All that's required to declare an object is to enclose the
//  desired object's methods & properties in curly braces.
//
var oBatwing = {
    Status: "Ready",
    ReportStatus: function () {
        document.write("<br />Batwing status is " + this.Status + "...");
    },
    RescueBatman : function() {
         document.write ("<br />Launching batwing for rescue operation!");
    }
 }

 //
 //  Property access and Method invocation 
 //
 oBatwing.ReportStatus();
 if (oBatwing.Status === "Ready") {
     oBatwing.RescueBatman();
 }


 //
 //  Objects can be passed as function arguments (and enumerated).
 //
 //  Declare "user-defined" utilities object
 //
 var udUtilities = {
     EnumerateObject: function (oObject) {
         for (i in oObject) {
             document.write("<br />     <b>" + i + "</b> -->  " + oObject[i]);
         }  // for
     }  // fn EnumerateObject
 }  // obj udUtilities

 //
 //  Invoke udUtilities.EnumerateObject()
 //
 document.write("<br /><br /><b>Object oBatwing</b>::");
 udUtilities.EnumerateObject(oBatwing);


//
//  An empty object declaration is valid.
//
var oEmpty = {};
document.write("<br /><br /><b>Object oEmpty</b>::");
udUtilities.EnumerateObject(oEmpty);


//
//  An object declaration can EASILY be embedded
//  within a parent object declaration.
//

var oTatooine = {
    id: 34,
    name: "Tatooine",

    oSandpeople: {
        factionID: 2,
        name: "Sand People",
        notification: function () {
            document.write("<p class=\"FactionNotification\">Sandpeople, " +
                "play nice!!</p>");
        }
    },

    // This is an array of UNNAMED objects
    oCities: [
        {LocationID: 13,  name: "Mos Eisley"},
        {LocationID: 14,  name: "Sandy Drain"},
        {LocationID: 15,  name: "Parched Gulch"}
    ]

}

document.write("<br /><br /><br />Attention factions of " + oTatooine.name +
    ",<br />specifically you of the " + oTatooine.oSandpeople.name +
    " faction::<br />");
oTatooine.oSandpeople.notification();

document.write("<br /><br />Cities of " + oTatooine.name + "::");
for (i in oTatooine.oCities)
    document.write("<br />" + i +  " -->  Location " +
        oTatooine.oCities[i].LocationID + 
        " - " + oTatooine.oCities[i].name);



//
// Object properties can be overwritten, directly, by default
//
for (i in oTatooine.oCities)
    oTatooine.oCities[i].LocationID *= 10;

document.write("<br /><br />Cities of " + oTatooine.name + " modified::");
for (i in oTatooine.oCities)
    document.write("<br />" + i + " -->  Location " +
        oTatooine.oCities[i].LocationID +
        " - " + oTatooine.oCities[i].name);





//
//  Object references can be created by simple assignment
//
oHomePlanet = oTatooine;

document.write("<br /><br />Cities of Luke's home planet::");
for (i in oHomePlanet.oCities)
    document.write("<br />" + i + " -->  Location " +
        oHomePlanet.oCities[i].LocationID +
        " - " + oHomePlanet.oCities[i].name);




//
//  New properties can be added programmatically,
//  BY SIMPLE ASSIGNMENT
//

for (i in oTatooine.oCities) {
    if (typeof oTatooine.oCities[i].Geography === "undefined")
        
        oTatooine.oCities[i].Geography = "Type " +   
            (Math.floor(Math.random() * (4 - 1)) + 1).toString() +
            " Desert";
}

document.write("<br /><br />(New Property) Geography of Luke's home planet::");
for (i in oHomePlanet.oCities)
    document.write("<br />" + i + " -->  Location " +
        oHomePlanet.oCities[i].LocationID +
        " - " + oHomePlanet.oCities[i].name +
        " (" + oHomePlanet.oCities[i].Geography + ")");



//
//  Although JavaScript does NOT support classes,
//  it does implement the notion of object constructors
//  which can be used to compliment the functionality
//  of JavaScripts object literals.
//
//  Note lack of error checking for simplicity.
//
function SimpleCar(sMake, sModel, sYear, bTurbocharged) {
    this.Make = sMake;
    this.Model = sModel;
    this.Year = sYear;
    this.Turbocharged = bTurbocharged;
    this.Turbocharge = function () { this.Turbocharged = true; }
    this.Display = function () {
        return this.Year + " " + 
            (this.Turbocharged ? "turbocharged " : "") +
            this.Make + " " + this.Model;
    }
}

//
//  Call SimpleCar constructor to create a couple test objects
//
var oBronco = new SimpleCar("Ford", "Bronco", 1981, false);
var oCobalt = new SimpleCar("Chevy", "Cobalt", 2008, false);
alert("A JavaScript object constructor was used " +
    "to create:\n\nA " + oBronco.Display() + " SimpleCar object and a " +
    oCobalt.Display() + " SimpleCar object.");


//
//  Turbocharge the Cobalt!!  hahaha
//
oCobalt.Turbocharge();
alert("A JavaScript object constructor was used " +
    "to create:\n\nA " + oBronco.Display() + " SimpleCar object and a " +
    oCobalt.Display() + " SimpleCar object.");



//
//  HTML event handlers can only be associated AFTER
//  the doument object model has been fully created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  The (DOM) onload event provides that opportunity.
//
//  This does present a dilemma, though, because the
//  user could be clicking on around on the web page
//  before event handlers get registered...
//
//  Note::  It would be more appropriate to move this
//  code to an external js file.  And, a handler can
//  be registered there with an anonymous function as
//  follows:
//
//  window.onload = function() { ... .onclick = ...}
//
function OnloadEventHandler() {
    //
    //  Get a reference to the btnClickMe "element"
    //  in the DOM, and set it's onclick event.
    //
    document.getElementById('btnClickMe').onclick = ClickMeEventHandler;
}


function ClickMeEventHandler() {
    alert("Yep.\n\nYou clicked me.");

    var oSecondParargaph = document.getElementById("pSecond");
    //
    //  Note limitations and differences of null and undefined,
    //  in typeof or direct value comparison...
    //
    if (oSecondParargaph !== null) {
        alert("Btw, the nodeName property of the paragraph " +
                                  "with id=\"pSecond\" is...\n\n" +
                                  oSecondParargaph.nodeName +
                                  "\n\n\nAnd, its innerHTML is...\n\n " +
                                  oSecondParargaph.innerHTML);
    }
    oSecondParargaph.innerHTML = "Note that I overwrote " +
                             "the (strong) Second pararaph text<br/>by accessing " +
                             "the (non-standard) innerHTML property of its<br/>" +
                             "parent HTML &lt;p ...&gt; element."
    //
    //  Note that innerHTML is technically non-standard 
    //  though very widely supported.  Might be safer to
    //  use properties as exposed by jQuery.


    var lAllParagraphsOnThePage = document.getElementsByTagName("p");
    alert("document.getElementsByTagName(\"p\") yields a LIST " +
                            "of " + lAllParagraphsOnThePage.length +
                            " paragraph elements.");
    for (i in lAllParagraphsOnThePage) {
        alert(lAllParagraphsOnThePage[i].innerHTML);
    }

    //
    //  Note, {element}.getElementByClassName is part of HTML5
    //  but not supported in all browsers.  Write your own
    //  "GetElemByClassName" or use jQuery, instead.
    //

    alert("Parent of the second paragraph is " +
                            document.getElementById("pSecond").parentNode.nodeName +
                            "\nand its id is " +
                            (oSecondParargaph ? oSecondParargaph.id : "undefined") +
                            ".");

    //
    //  HTML heirarchical DOM elements can be identifed
    //  with the following element methods...
    //
    //  var oStartingElem = document.getElementById("pSecond");
    //  
    //  oStartingElem.hasChildNodes();
    //  var lChildren     =   oStartingElem.childNodes();
    //  var oFirstChild   =   oStartingElem.firstChild();
    //  var oLastChild    =   oStartingElem.lastChild();
    //  oStartingElem.appendChild();
    //  
    //  var oNextSibling  =   oStartingElem.nextSibling();
    //  var oPrevSibling  =   oStartingElem.previousSibling();
    //  
    //  oStartingElem.cloneNode();
    //  
    //  oStartingElem.getAttribute();
    //  
    //  var oStartingElemType = oStartingElem.nodeType();
    //  
    //  Etcetera.
    //


    //
    //  Note that certain HTML elements have built-in access
    //  to specific attribute properties, such as the anchor tag.
    //
    //  All element attributes can be accessed by {oElem}.getAttribute()
    //  and {oElem}.setAttribute() methods.
    //

    oTestAnchorElem = document.getElementById("hidTestAnchor");
    // sTestAnchorHref = oTestAnchorElem.href;
    sTestAnchorHref = oTestAnchorElem.getAttribute("href");
    alert("The href of the test anchor element is\n\n" +
                             sTestAnchorHref);

    // oTestAnchorElem.href = "http://www.learnvisualstudio.net";
    oTestAnchorElem.setAttribute("href",
                            "http://www.learnvisualstudio.net");
    oTestAnchorElem.innerHTML = "Learn Visual Studio";
    alert("The href of the test anchor element has been changed to\n\n" +
                             oTestAnchorElem.href);


    window.open(oTestAnchorElem.href);
    window.location = oTestAnchorElem.href;


}  // ClickMeEventHandler




































