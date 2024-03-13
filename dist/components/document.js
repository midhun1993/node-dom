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
    getElementsByClassName(className) {
        let rules = (0, maker_1.getRuleSet)(`.${className}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult();
    }
    getElementsByTagName(tag) {
        let rules = (0, maker_1.getRuleSet)(`${tag}`);
        let engine = new engine_1.default(this, rules);
        return engine.getResult();
    }
    querySelector(selector) {
        let rules = (0, maker_1.getRuleSet)(selector);
        let engine = new engine_1.default(this, rules);
        return engine.getResult();
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
