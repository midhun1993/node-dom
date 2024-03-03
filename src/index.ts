import * as parse5 from 'parse5';
import Document from './components/document';
function parse(htmlString:string, option : object= {}){
    let parsed = parse5.parse(htmlString);
    return new Document(parsed);
}

export { parse };      