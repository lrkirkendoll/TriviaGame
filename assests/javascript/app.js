
var correct = "0";
var incorrect = "0";
var unanswered = "0";







//Hide start button on click event.
$(document).ready(function() {
    $("#container").hide();
});

    $("button").click(function(){
            $("button").hide();
    });

    $("button").click(function(){
        $("#container").show();
    });