// var title_bar = document.getElementsByClassName("title-bar");
// var top_bar = document.getElementsByClassName("top-bar");
//
// function isVisible( elem ) {
//     return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
// }
//
// if (isVisible(title_bar)) {
//     top_bar.style.height = 0;
// }

import $ from 'jquery';

console.log('hello');

if ($(".title-bar").css("display") !== "none") {
    $(".top-bar, .title-bar").height('auto');
}