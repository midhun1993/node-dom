const HtmlParser = require('./dist/index');
const htmlString = '<html><style>h1 { height: 10px;}</style><body><h1 style="height:20px" class="heading">Hello, world!</h1></body></html>';

const document = HtmlParser.parse(htmlString);
console.log(document);
// const htmlStrings = parse5.serialize(document);
// console.log(htmlStrings);