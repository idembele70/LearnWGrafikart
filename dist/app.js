"use strict";
function loveFunc(flower1, flower2) {
    return ((flower1 % 2 !== 0 && flower2 % 2 === 0) ||
        (flower1 % 2 === 0 && flower2 % 2 !== 0));
}
