
//
//  C9JSLesson17.js
//
//  Created:  2015-01-25 BGH
//



//
//  onLoad event indicates the the DOM is completely instantiated
//  and the DOM/page is fully rendered
//
function OnLoadEventHandler() {

}




//
//  document ready handler (jQuery ready event)
//
$(
    function () {

        //
        //  Call the jQuery tabs method on hiddivTabs.  jQuery will then render all
        //  divs in the parent div as seperate tabs.  The parent div must contain
        //  an unordered list of anchor elements, the href for each anchor element
        //  must correspond with the html id assigned to a single div within the parent
        //  div.  Note that the text of each anchor item in the ul will be displayed
        //  as the tab name.
        //
        $("#hiddivTabs").tabs(
            { active: 1,
                disabled: [0],
                hide: { effect: "puff", duration: 500 }
            }
         );
        /*  ).tabs("add", "BareClickABob.html", "Click-a-Bob");  .tabs("Add" method depricated */


        //
        //  Add a new li to the ul WITHIN the demo tab's parent div
        //  and a corresponding div including the new tab's explicit html content.
        //
        // Get jQuery tabs object associated with hiddivTabs
        var jqotabsDemo = $("#hiddivTabs").tabs();

        // Get the unordered list defined with the tabs div
        var jqoulDemo = jqotabsDemo.find("ul");

        $("<li><a href='#hiddivTab4'>New Tab</a></li>").appendTo(jqoulDemo);
        $("<div id='hiddivTab4'><p>New tab content</p></div>").appendTo(jqotabsDemo);

        // Call the jQuery .tabs("refresh") method on the jQuery tabs object (jqotabsDemo)
        jqotabsDemo.tabs("refresh");

        // Create a new tab with content described by an external html file
        $("<li><a href='BareClickABob.html'>Click-A-Bob</a></li>").appendTo(jqoulDemo);
        jqotabsDemo.tabs("refresh");


        //
        // Associate a jQuery datepicker object with the hidinptxtDatePicker
        // and define an onSelect handler for the datepicker object
        //
        $("#hidinptxtDatePicker").datepicker(
            //  Object literal as parameter to jQuery datepicker constructor
            {
                //  Anonymous function within the object literal
                onSelect: function (sDateText, oDatePickerInstance) {
                    var sChosenDate =
                        "<span id='hidspanChosenDate' " +
                        "style='margin-left: 1.0em; font-family: report1942'>" +
                        "You picked:  " + sDateText + "</span>";

                    if (!$("#hidspanChosenDate").length)     // Note: !$("#hid") does not work
                        $("#hidpDateSelection").append(sChosenDate);
                    else
                        $("#hidspanChosenDate").html(sChosenDate);
                }
            }
        );






    }  // document ready (jQuery event)
);


















