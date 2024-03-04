const HtmlParser = require('./dist/index');
const htmlString = '<html><style>h1 { height: 10px;}</style><body><h1  id="Hello" style="height:20px" class="heading">Hello, world!</h1></body></html>';

const document = HtmlParser.parse(htmlString);
document.getElementById("Hello");
document.getElementsByClassName("hello");
document.getElementsByTagName("hello");
document.getElementsByName("hello");
document.querySelector("hello");
document.querySelectorAll("hello");
// const htmlStrings = parse5.serialize(document);
// console.log(htmlStrings);