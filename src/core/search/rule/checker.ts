const Checker:any = {
    'id': function (node:any, matchText:any):boolean {
       if(!node.attrs) {
            return false;
        }
        let attributes = node.attrs;
        let id = attributes.find((i:any)=> i.name === 'id');
        if(!id){
            return false;
        }
        return id['value'] == matchText;
    }
}
export default Checker;