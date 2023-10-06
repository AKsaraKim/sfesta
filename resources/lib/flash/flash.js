function flash(){
    $('.flash')
     .show()  //show the hidden div
     .animate({opacity: 0.5}, 300) 
     .fadeOut(300)
     .css({'opacity': 1});
}
