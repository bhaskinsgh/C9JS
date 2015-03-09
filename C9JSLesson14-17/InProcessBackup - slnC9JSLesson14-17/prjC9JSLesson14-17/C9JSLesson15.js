
//
//  C9JSLesson15.js
//
//  Created:  2015-01-19  BGH
//


$(function () {
    alert("jQuery ready!");

    //  jQuery select by html id
    // $("#l15_pFirst").addClass("highlight");

    //  jQuery select by element/tag
    // $("p").addClass("highlight");

    //  jQuery select by class
    // $(".chosen").addClass("highlight");

    //  jQuery select by combination of CSS selectors
    $("#l15_pFirst, .chosen").addClass("highlight");

    // jQuery select by element "contains"
    $("li:contains('F')").addClass("highlight");

    // jQuery select by element "next" and "prev"
    var oliTwo = $("li:contains('Three')").prev();
    var oliFour = $("li:contains('Three')").next();
    oliTwo.text(oliTwo.text() + " (2)");
    oliFour.text(oliFour.text() + " (4)");

    // jQuery select by element "siblings"
    var aSiblingsOfThree = $("li:contains('Three')").siblings();
    for (i in aSiblingsOfThree) {
        // aSiblingsOfThree[i].text(aSiblingsOfThree[i].text() + "  {Sibling of Three}");
        aSiblingsOfThree[i].innerHTML += "  {Sibling of Three}";
    }

    // jQuery select by element parent (parent of specified li is ul)
    $("li:contains('Three')").parent().addClass("important");

    // jQuery select by nth-child OF PARENT ELEMENT!!!
    $("li:nth-child(1)").text($("li:nth-child(1)").text() + "  <-- The first child element of ul");

    // jQuery select by (any) attribute
    // Valid --> $("p[name != 'l15_npSecond']").addClass("important");
    $("p[name != 'l15_npSecond']").addClass("important");

    // jQuery select by specified attribute excluded
    var aoUnnamedPsInBody = $("p", $("body")).not("[name]");
    for (i in aoUnnamedPsInBody) {
        aoUnnamedPsInBody[i].innerHTML = "[unnamed] " + aoUnnamedPsInBody[i].innerHTML;
    }


    //  Select by specialized jQuery "header" selector
    //  This returns jQuery object references to any h1, h2, h3 elements, etc. 
    aoHeaders = $(":header");
    for (i in aoHeaders) {
        aoHeaders[i].innerHTML += " !";
    }


    //  Select by specialized jQuery element "empty" selector
    $('p:empty').text("This text added with $(p:empty).text(\"This text added with...  haha");


    // Select by specialized jQuery element list item "even" selector
    aoListItemEven = $("li:even");
    for (i in aoListItemEven) {
        aoListItemEven[i].innerHTML += "  (even)";
    }


    //
    //  See http://api.jquery.com/category/selectors/
    //  for MORE THAN SIXTY different jQuery selectors !!
    //


});       // jQuery .ready

 




function OnLoadEventHandler() {

}  // OnLoadEventHandler









