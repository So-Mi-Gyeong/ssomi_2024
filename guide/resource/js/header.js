$(document).ready(function(){
    $.ajax({
        type : "GET",
        url : "./includ/header.html",
        dataType : "html",
        success: function(header_result){
            headerNav(header_result);
        }
    });
 
    function headerNav(header_result) {
        $("#guide_head").html($(header_result).filter(".menuBox"));

    }
});

