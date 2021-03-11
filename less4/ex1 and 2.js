const textToReplace = document.querySelector(".textToReplace").innerHTML;
textToReplace.replace(/'/g, '"');
textToReplace.replace(/\B'|'\B/g, '"');
console.log(textToReplace);