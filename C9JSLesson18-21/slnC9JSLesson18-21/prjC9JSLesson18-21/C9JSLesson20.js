
//
//  C9JSLesson20.js
//
//  Created:  2015-02-12 BGH
//
//

function OnLoadEventHandler() {
}


$(jqDOMReady);


function jqDOMReady() {

    //
    //  NOTE:: I went beyond the scope of this course and explored the
    //  basics of the MODULE PATTERN for implementing pseudo namespaces
    //  in file C9JSLesson18.
    //
    //  That file is heavily commented and complements the information
    //  covered in this lesson (Lesson 20 | Fundamentals of JavaScript Closures).
    //


    //
    //  Simple example of plain old function scope
    //
    function BuildACat() {
        var sCatName = "Mr. Janks";

        function CatFactory() {
            // 
            //  Nested (inner) functions have access to variables defined in outer functions !!
            //  But, outer functions do not have access to variables defined in inner functions.
            //
            alert("A cat named " + sCatName + " has been built.");
        }
        CatFactory();
    }

    //  Register event handler
    //  $("#hidaBuildCat").click( BuildACat );



    //
    //  A CLOSURE is an object representing a function and all of the data
    //  available at the time the function was created (the function's environment
    //  consisting of local variables, parameter values, etc)
    //
    //  A closure could also be described as
    //    "an instance of a function with its own instance values"
    //
    function PersistentBuildACat() {
        var m_sCatName = "Trevor";

        function CatFactory() {
            alert("A cat named " + m_sCatName + " has been built!");
        }

        return CatFactory;
    }

    $("#hidaBuildCat").click(
        ClosureBuildACat = PersistentBuildACat()    // Note PersistentBuildACat() returns CatFactory fn.
    );                                              // Didn't NEED to assign the fn to ClosureBuildACat.



    //
    //  Closures are commonly used to implement the "MODULE PATTERN"
    //  for supporting namespaces with public and private methods.
    //
    //  A simple example follows.  See C9JSLesson18.js for a more thorough example!!!
    //
    
    SOMENAMESPACE =
        (function ()
         {
             function PrivateFunction() // Could also have declared var PrivateFunction = function(){}
             {
                 alert("Hello from PrivateFunction");
             }

             return {   // WOW!!!  The opening curly brace for an object literal
                        // MUST begin on same line as return keyword!!!
                        // Otherwise an automatic semicolon is inserted, and the
                        // object definition will be interpreted as extraneous code.
                 PublicFunction:
                     function () { PrivateFunction(); }
             }
        }
       )();

  SOMENAMESPACE.PublicFunction();


  
  //
  // Simple, but practical example of a closure
  //
  function MakeSizer(nSize) {
      return function () {
          document.body.style.fontSize = nSize + "px";
      }
  }

  var oSize12 = MakeSizer(12);
  var oSize14 = MakeSizer(14);
  var oSize16 = MakeSizer(16);

  $("#hidaSize12").click(oSize12);
  $("#hidaSize14").click(oSize14);
  document.getElementById("hidaSize16").onclick = oSize16;


}  // function jqDOMReady







//  Other JavaScript libraries: MooTools, DoJo, YUI, EXTjs, PhoneGAP, AngularJS, etc























