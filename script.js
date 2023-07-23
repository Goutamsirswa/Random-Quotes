var Quotes = [{
    quote: '"Programming isn"t about what you know; it"s about what you can figure out."',
    writter: "- Chris Pine"
}, {
    quote: '"The only way to learn a new programming language is by writing programs in it."',
    writter: "- Dennis Ritchiee"
}
, {
    quote: '" Sometimes it"s better to leave something alone, to pause, and that"s very true of programming."',
    writter: "- Joyce Wheeler"
}
, {
    quote: '"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them."',
    writter: "- Andrew Hunt"
}
, {
    quote: '"Testing leads to failure, and failure leads to understanding."',
    writter: "- Burt Rutan"
}
, {
    quote: '"The best error message is the one that never shows up."',
    writter: "- Thomas Fuchs"
}
, {
    quote: '"The most damaging phrase in the language is.. it"s always been done this way"',
    writter: "- Grace Hopper"
}
];
var btn = document.getElementById('btn');
btn.addEventListener('click', newQuote);

function newQuote() {

    var r=Math.floor(Math.random()*7);
    // console.log();
    document.getElementById('Quote').innerText=Quotes[r]['quote'];
    document.getElementById('writter').innerText=Quotes[r]['writter'];
}