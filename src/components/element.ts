import * as parse5 from 'parse5';
/**
 * @module Element
 */
class Element {
    protected node:any;
    constructor(node:any){
        this.node = node;
    }

    /**
     * @type {string}
     */
    get innerHTML() {
        return parse5.serialize(this.node);
    }
    set innerHTML(html) {
        let parseFrag:any = parse5.parseFragment(html);
        this.node.childNodes = parseFrag.childNodes;
    }
}
export default Element;