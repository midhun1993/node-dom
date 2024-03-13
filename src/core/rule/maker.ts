
const RuleMaker : any = {
    "ID": function(str:string, policy:any) {
        return  {
            type: 'id',
            match: str.substring(1, str.length),
            policy: 'NON_STRICT',
            scope: 'SINGLE',
        }
    }
}


function identifySelector(s:string) {
    const selectorType:any = {
        '.': "CLASS",
        '#':"ID",
    }
    let selector = selectorType[s.substring(0,1)] || 'TAG';
    return selector;
}

function processChunk(c:any, policy:any) {
    return RuleMaker[identifySelector(c)](c, policy);
}

function getRuleSet(selector:string): any {
    let selectorChunks = selector.split(/S/).reverse();
    let ruleSet:any[] = [];
    while(selectorChunks.length > 0) {
        let chunk = selectorChunks.pop();
        ruleSet.push(processChunk(chunk, true));
    }
   return {
    ruleSet
   };
}

export  {
    getRuleSet
}