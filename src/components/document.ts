import Element from "./element";
import { parseSelector } from "./utils";
import { getRuleSet } from "../core/rule/maker";
import SearchEngine from '../core/search/engine';
class Document {
    _data:object | null;
    constructor(parsedObject:object) {
        this._data = parsedObject;
    }

    public getElementById(id:string): any{
         let rules  = getRuleSet(`#${id}`);
         let engine= new SearchEngine(this, rules);
         return engine.getResult();
    }

    public getElementsByClassName(id:string): any{
        let rules  = getRuleSet(`.${id}`);
        let engine= new SearchEngine(this, rules);
        return engine.getResult();
    }

    public getElementsByTagName(id:string): Element | null{
        let parsedSelector = parseSelector(id, 'tag');
        return null
    }

    public getElementsByName(id:string): Element | null{
        let parsedSelector = parseSelector(id, 'name');
        return null
    }

    public querySelector(id:string): Element | null{
        let parsedSelector = parseSelector(id, 'query');
        return null
    }

    public querySelectorAll(id:string): Element | null{
        let parsedSelector = parseSelector(id, 'queryAll');
        return null
    }

    public getData() {
        return this._data;
    }
}

export default Document;