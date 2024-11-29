import { ElementCollectionResult, ElementResult } from 'types/types'
import { getRuleSet } from "../core/rule/maker";
import SearchEngine from '../core/search/engine';

/**
 * @module Document
 */
class Document {
    _data: object | null;
    constructor(parsedObject: object) {
        this._data = parsedObject;
    }

    /**
     * getElementById: return an element if the id matches
     * @param {string} id  string id 
     * @returns {ElementResult}
     */
    public getElementById(id: string): ElementResult {
        let rules = getRuleSet(`#${id}`);
        let engine = new SearchEngine(this, rules);
        return engine.getResult(false);
    }

     /**
     * getElementsByClassName: return an element if the class matches
     * @param {string} id  string class 
     * @returns {ElementResult}
     */
    public getElementsByClassName(className: string): ElementResult {
        let rules = getRuleSet(`.${className}`);
        let engine = new SearchEngine(this, rules);
        return engine.getResult(false);
    }

     /**
     * getElementsByTagName: return an element if the tag matches
     * @param {string} id  string tag 
     * @returns {ElementResult}
     */
    public getElementsByTagName(tag: string): ElementResult {
        let rules = getRuleSet(`${tag}`);
        let engine = new SearchEngine(this, rules);
        return engine.getResult(false);
    }
    
    /**
     * querySelector: return an element if the selector matches
     * @param {string} id  string selector 
     * @returns {ElementResult}
     */
    public querySelector(selector: string): ElementResult {
        let rules = getRuleSet(selector);
        let engine = new SearchEngine(this, rules);
        return engine.getResult(false);
    }

    /**
     * querySelectorAll: return an element array if the selector matches
     * @param {string} id  string selector 
     * @returns {ElementResult}
     */
    public querySelectorAll(selector: string): ElementCollectionResult {
        let rules = getRuleSet(selector, 'MULTIPLE');
        let engine = new SearchEngine(this, rules);
        return engine.getResult(true);
    }

    /**
     * getData: return data object
     * @returns {any}
     */
    public getData() {
        return this._data;
    }
}

export default Document;