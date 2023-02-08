/*global document: false */


/* Simple event test
document.querySelector('html').onclick = function(){
alert ('oops!');
}
*/

var changeImg = document.querySelector('img');
changeImg.onclick = function () {
    "use strict";
    var myImg = changeImg.getAttribute('src');
    if (myImg === 'images/Exclamation-mark.png') {
        changeImg.src = "images/question.png";
    } else {
        changeImg.src = "images/Exclamation-mark.png";
    }
}
