enum POLICY  {
    'non_strt' = 'NON_STRICT',
    'strt' = 'STRICT'
}

const RuleMaker : any = {
    "ID": function(str:string, policyFlag:string, scope:any) {
        return  {
            type: 'ID',
            match: str.substring(1, str.length),
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: scope,
        }
    },
    "CLASS": function(str:string, policyFlag:any, scope:any) {
        return  {
            type: 'CLASS',
            match: str.substring(1, str.length),
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: scope,
        }
    },
    "TAG": function(str:string, policyFlag:any, scope:any) {
        return  {
            type: 'TAG',
            match: str,
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: scope,
        }
    },
    "COMPOUND": function(str:string, policyFlag:any, scope:any) {
        let tempholder:string ='';
        let selectors = [];
        for(let i = 0; i < str.length; i++) {
            if([".", "#"].indexOf(str.charAt(i)) == -1){
                tempholder += str.charAt(i);
            } else{
                if(tempholder){
                    selectors.push(tempholder);
                }
                tempholder = str.charAt(i);
            }
        }
        selectors.push(tempholder);
        let match = selectors.map(i => processChunk(i, 'non_strt', 'SINGLE'))
        return  {
            type: 'COMPOUND',
            match: match,
            policy: POLICY[policyFlag as keyof typeof POLICY] ,
            scope: scope,
        }
    }
}
function isCompound(s:string) {
    if(s.indexOf('.') > 0 || s.indexOf('#') > 0){
        return true;
    }
    return false;
}


function identifySelector(s:string) {
    if(isCompound(s)){
        return 'COMPOUND';
    }
    const selectorType:any = {
        '.': "CLASS",
        '#':"ID",
    }
    let selector = selectorType[s.substring(0,1)] || 'TAG';
    return selector;
}

function processChunk(c:any, policyFlag:any, scope:any) {
    return RuleMaker[identifySelector(c)](c, policyFlag, scope);
}

function isPolicyDefinition(chunk:any):boolean {
    return chunk.trim() === '>';
}

function getRuleSet(selector:string, scope ='SINGLE'): any {
    let selectorChunks:string[] = selector.split(/\s{1,7}/).reverse();
    let ruleSet:any[] = [];
    let policyFlag = 'non_strt';
    while(selectorChunks.length > 0) {
        let chunk = selectorChunks.pop();
        if(isPolicyDefinition(chunk)){
            policyFlag = 'strt';
        } else {
            ruleSet.push(processChunk(chunk, policyFlag, scope));
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