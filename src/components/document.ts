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

    public getElementsByClassName(className:string): any{
        let rules  = getRuleSet(`.${className}`);
        let engine= new SearchEngine(this, rules);
        return engine.getResult();
    }

    public getElementsByTagName(tag:string): any{
        let rules  = getRuleSet(`${tag}`);
        let engine= new SearchEngine(this, rules);
        return engine.getResult();
    }

    
    public querySelector(selector:string): any{
        let rules  = getRuleSet(selector);
        let engine= new SearchEngine(this, rules);
        return engine.getResult();
    }

    public querySelectorAll(selector:string): any{
        let rules  = getRuleSet(selector, 'MULTIPLE');
        let engine= new SearchEngine(this, rules);
        return engine.getResult(true);
    }

    public getData() {
        return this._data;
    }
}

export default Document;