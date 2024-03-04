class SearchEngine {
    protected instruction:[];
    protected document:any;
    constructor(document:any, instruction:any){
        this.document = document;
        this.instruction = instruction;
    }

    getResult(): null{
        return null
    }
}

export default SearchEngine;