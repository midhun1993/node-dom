import Element from "./element";
import { transformToArray, buildPossibleSelectors, generateMap } from "./utils";
class Document {
    _data:object | null;
    constructor(parsedObject:object) {
        this._data = parsedObject;
        this._buildMap();
    }

    _buildMap():void{
        if(this._data) {
            // let initialValue:any = [];
            // transformToArray(this._data, initialValue);
            // buildPossibleSelectors(initialValue);
            generateMap(this._data);
        }
    }

    public getElementById(id:string): Element | null{
         return null;  
    }
}

export default Document;