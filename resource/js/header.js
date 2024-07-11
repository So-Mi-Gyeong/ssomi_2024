$(document).ready(function(){
    $.ajax({
        type : "GET",
        url : "./includ/header.html",
        // url : "../includ/header.html",
        dataType : "html",
        success: function(header_result){
            headerNav(header_result);
        }
    });
    $.ajax({
      type : "GET",
      url : "../includ/header.html",
      dataType : "html",
      success: function(header_result){
          headerNav(header_result);
      }
  });
 
    function headerNav(header_result) {
        $("#menu").html($(header_result).filter(".wrap"));
         //*********************** menu ***********************
        const uinavs = document.querySelectorAll('.wrap .ui-menu .ui-menu-nav');
        for(let i = 0; i < uinavs.length; i++) {
            uinavs[i].addEventListener('click', act); //click -> act()실행
        }

        function act() {
            this.classList.toggle('open');
            
            const menu = document.querySelector('.ui-menu-list');
            menu.classList.toggle('open');
            // const menulis = document.querySelectorAll('.ui-menu ul li');
            // for(let i = 0; i < menulis.length; i++) {
            //     menulis[i].addEventListener('click', function(){
            //         menu.classList.remove('open');
            //     });
            // }
        }
    }
});

