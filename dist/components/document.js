"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const maker_1 = require("../core/rule/maker");
const engine_1 = __importDefault(require("../core/search/engine"));
class Document {
    constructor(parsedObject) {
        this._data = parsedObject;
    }
    getElementById(id) {
        let rules = (0, maker_1.getRuleSet)(`#${id}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult();
    }
    getElementsByClassName(id) {
        let rules = (0, maker_1.getRuleSet)(`.${id}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult();
    }
    getElementsByTagName(id) {
        let parsedSelector = (0, utils_1.parseSelector)(id, 'tag');
        return null;
    }
    getElementsByName(id) {
        let parsedSelector = (0, utils_1.parseSelector)(id, 'name');
        return null;
    }
    querySelector(id) {
        let parsedSelector = (0, utils_1.parseSelector)(id, 'query');
        return null;
    }
    querySelectorAll(id) {
        let parsedSelector = (0, utils_1.parseSelector)(id, 'queryAll');
        return null;
    }
    getData() {
        return this._data;
    }
}
exports.default = Document;
