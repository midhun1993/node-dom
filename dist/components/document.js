"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Document {
    constructor(parsedObject) {
        this._data = parsedObject;
        this._buildMap();
    }
    _buildMap() {
        if (this._data) {
            // let initialValue:any = [];
            // transformToArray(this._data, initialValue);
            // buildPossibleSelectors(initialValue);
            (0, utils_1.generateMap)(this._data);
        }
    }
    getElementById(id) {
        return null;
    }
}
exports.default = Document;
