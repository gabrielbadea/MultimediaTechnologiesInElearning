$(document).ready(function() {
    $('p').click(function() {
        window.alert("Ati apasat pe un element de tip p!");
    });

    $("#hide").click(function(){ 
        $("p").hide();              // ascunde toate elementele de tip <p>
    });

    $("#show").click(function(){
        $("p").show();              // afiseaza toate elementele de tip <p>
    });

    $("#toggle").click(function(){
        $("p").toggle();
    });

    $("#fadeIn").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(4000);
    });

    $("#fadeOut").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(4000);
    });

    $("#animate").click(function(){
        $("#div4").animate({
            height: '300px',
            width: '300px'
        });
    });

    $("#chain").click(function(){
        $("#div5").css("color", "blue").slideUp(2500).slideDown(2500);
    });

});