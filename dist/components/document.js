"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maker_1 = require("../core/rule/maker");
const engine_1 = __importDefault(require("../core/search/engine"));
/**
 * @module Document
 */
class Document {
    constructor(parsedObject) {
        this._data = parsedObject;
    }
    /**
     * getElementById: return an element if the id matches
     * @param {string} id  string id
     * @returns {ElementResult}
     */
    getElementById(id) {
        let rules = (0, maker_1.getRuleSet)(`#${id}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult(false);
    }
    /**
    * getElementsByClassName: return an element if the class matches
    * @param {string} id  string id
    * @returns {ElementResult}
    */
    getElementsByClassName(className) {
        let rules = (0, maker_1.getRuleSet)(`.${className}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult(false);
    }
    /**
    * getElementsByTagName: return an element if the tag matches
    * @param {string} id  string id
    * @returns {ElementResult}
    */
    getElementsByTagName(tag) {
        let rules = (0, maker_1.getRuleSet)(`${tag}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult(false);
    }
    /**
     * querySelector: return an element if the selector matches
     * @param {string} id  string id
     * @returns {ElementResult}
     */
    querySelector(selector) {
        let rules = (0, maker_1.getRuleSet)(selector);
        let engine = new engine_1.default(this, rules);
        return engine.getResult(false);
    }
    /**
     * querySelectorAll: return an element array if the selector matches
     * @param {string} id  string id
     * @returns {ElementResult}
     */
    querySelectorAll(selector) {
        let rules = (0, maker_1.getRuleSet)(selector, 'MULTIPLE');
        let engine = new engine_1.default(this, rules);
        return engine.getResult(true);
    }
    /**
     * getData: return data object
     * @returns {any}
     */
    getData() {
        return this._data;
    }
}
exports.default = Document;
