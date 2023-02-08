/*global document: false */


/* Simple event test
document.querySelector('html').onclick = function(){
alert ('oops!');
}
*/

/* Try and cha nge the main image with click */
var mainImage = document.querySelector('img');
mainImage.onclick = function () {
    "use strict";
    var myImages = mainImage.getAttribute('src');
    if (myImages === 'images/Exclamation-mark.png') {
        mainImage.setAttribute('src', 'images/question.png');
    } else {
        mainImage.setAttribute('src', 'images/Exclamation-mark.png');
    }
};

