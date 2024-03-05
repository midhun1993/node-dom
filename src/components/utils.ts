
function parseSelector(selector: string, type:string = 'query' )
{   
    //Improve: clean the selector
    //selector = selector.toLowerCase();
    
    const instructionBuilder:any = {
        "id": function(str: string){
            return {
                findAll: false,
                instructionSet: [
                    {
                        type: 'id',
                        match: str,
                        policy: 'NON_STRICT',
                        scope: 'SINGLE',
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