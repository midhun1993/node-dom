class SearchEngine {
    protected instruction:any;
    protected document:any;
    protected result:any;
    constructor(document:any, instruction:any){
        this.document = document;
        this.instruction = instruction;
    }
    match(node:any, instruction:any):void {

    }
    doSearch():void{
        this.result = [this.document.getData()];
        let { instructionSet } = this.instruction;
        while(instructionSet.length > 0) {
            let result:any = []
            let instruction = instructionSet.pop();
            this.result.forEach((node: any)=> {
              let matched = this.match(node, instruction);
              result.push(matched);
            });
            this.result = result;
        }
    }
    getResult(): null{
        if(!this.result) {
            this.doSearch();
        }
        return null
    }
}

export default SearchEngine;