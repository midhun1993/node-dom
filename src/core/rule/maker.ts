enum POLICY  {
    'non_strt' = 'NON_STRICT',
    'strt' = 'STRICT'
}

const RuleMaker : any = {
    "ID": function(str:string, policyFlag:string) {
        return  {
            type: 'ID',
            match: str.substring(1, str.length),
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: 'SINGLE',
        }
    },
    "CLASS": function(str:string, policyFlag:any) {
        return  {
            type: 'CLASS',
            match: str.substring(1, str.length),
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: 'SINGLE',
        }
    },
    "TAG": function(str:string, policyFlag:any) {
        return  {
            type: 'TAG',
            match: str,
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
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

function processChunk(c:any, policyFlag:any) {
    return RuleMaker[identifySelector(c)](c, policyFlag);
}

function isPolicyDefinition(chunk:any):boolean {
    return chunk.trim() === '>';
}

function getRuleSet(selector:string): any {
    let selectorChunks:string[] = selector.split(/\s{1,7}/).reverse();
    let ruleSet:any[] = [];
    let policyFlag = 'non_strt';
    while(selectorChunks.length > 0) {
        let chunk = selectorChunks.pop();
        if(isPolicyDefinition(chunk)){
            policyFlag = 'strt';
        } else {
            ruleSet.push(processChunk(chunk, policyFlag));
            if(policyFlag == 'strt'){
                policyFlag = 'non_strt';
            }
        }

      
    }
   return {
    ruleSet : ruleSet.reverse()
   };
}

export  {
    getRuleSet
}