import TokenList from '../../components/token-list';
const Checker:any = {
    'ID': function (node:any, matchText:any):boolean {
       if(!node.attrs) {
            return false;
        }
        let attributes = node.attrs;
        let id = attributes.find((i:any)=> i.name === 'id');
        if(!id){
            return false;
        }
        return id['value'] == matchText;
    },
    'CLASS': function (node:any, matchText:any):boolean {
        if(!node.attrs) {
             return false;
         }
         let attributes = node.attrs;
         let classObject = attributes.find((i:any)=> i.name === 'class');
         if(!classObject){
             return false;
         }
         let tokenList = new TokenList(classObject['value']);
         return tokenList.contains(matchText);
     },
    'TAG': function (node:any, matchText:string):boolean {
        if(!node.tagName) {
            return false;
        }
        return node.tagName.toLowerCase() == matchText.toLowerCase();
     },
    'COMPOUND': function (node:any, matchArray:any):boolean {
       let validatedCases = matchArray.map((rule:any) => {
            let { type , match} = rule;
            return Checker[type](node, match);
       }) 
       return validatedCases.indexOf(false) == -1 ? true : false;
     }
}
export default Checker;