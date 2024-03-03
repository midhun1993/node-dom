class Document {
    public _data:object | null = null;
    constructor(parsedObject:object) {
        this._data = parsedObject;
        this.buildMap();
    }
    buildMap(){
        
    }
}

export default Document;