const HtmlParser = require('./dist/index');
const htmlString = '<html><style>h1 { height: 10px;}</style><body><h1   style="height:20px" class="heading">Hello, world!</h1><h2 style="height:20px" class="heading">Hello, world!</h2></body></html>';
console.time("Start")
const document = HtmlParser.parse(htmlString);
//let elem = document.getElementById("Hello");
//console.log(elem)
//let elem = document.getElementsByClassName("heading");
let elem = document.getElementsByTagName("h1");
//console.log(elem)
console.timeEnd("Start")

let elem2 = document.querySelectorAll("body  .heading");
console.log(elem2);
// elem2.innerHTML = '<h3>hey babe</h3>';
// console.log(document.querySelector("body").innerHTML);
//document.querySelectorAll("hello");
// const htmlStrings = parse5.serialize(document);
// console.log(htmlStrings);