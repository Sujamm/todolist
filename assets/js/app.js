//Check Off when click on li
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete a task
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
    if (event.which == 13) {
        //Grabbing the value of the input
        var todoText = $(this).val();
        //create a new li to add a new task
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});