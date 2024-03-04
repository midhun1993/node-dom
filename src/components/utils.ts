
function parseSelector(selector: string, type:string = 'query' )
{   
    //Improve: clean the selector
    selector = selector.toLowerCase();
    const instructionBuilder:any = {
        "id": function(str: string){
            return {
                multiple: false,
                instruction: [
                    {
                        column: 'id',
                        match: str
                    }
                ]
            }
        }
    }
    if(instructionBuilder[type]){
       return instructionBuilder[type](selector);
    }
   
}

export  {
    parseSelector
}