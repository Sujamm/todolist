//Check Off when click on li
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete a task
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
    if (event.which == 13) {
        //Grabbing the value of the input
        var todoText = $(this).val();
        //create a new li to add a new task
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$("h1 i").click(function() {
    $("input[type=text]").fadeToggle();
});

$("h1 i").click(function() {
    if ($(this).attr("class") === "fa fa-plus") {
        $(this).removeClass("fa fa-plus");
        $(this).addClass("fa fa-minus");
    } else {
        $(this).removeClass("fa fa-minus");
        $(this).addClass("fa fa-plus");
    }
});