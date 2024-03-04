function transformToArray(tree: any, initialValue:any[]= [], index = 0):void{
    initialValue.push({ node: tree, index});
    if(tree.childNodes){
        tree.childNodes.forEach((_tree: any, index:number) => {
            transformToArray(_tree, initialValue, index)
        });
    }
}

function buildPossibleSelectors(node:any) {
    console.log(node);
}
function getPossibleSelectors(n: any): string[]{
    if(!n.tagName) {
        return [];
    }
    let selector = [n.tagName];
    let validSelector = [];
    if(n.attrs?.length > 0){
        validSelector = n.attrs.filter((i:any) =>  ["id", "class"].indexOf(i.name) > -1 );
        validSelector = validSelector.map((i:any) => (i.name == 'id'? '.' : '#') + i.value.toLowerCase());
    }
    return selector.concat(validSelector);
}

function generateMap(tree: any) {
    let finalChildrens:any = [];
    const travel = (item:any) => {
        if(!item.childNodes){
            finalChildrens.push(item)
        } else {
            item.childNodes.forEach((_i:any) => {
                travel(_i);
            })
        }

    } 
    travel(tree);
    let treeTrans:any[] = []
    finalChildrens.forEach((item:any) => {
        let n = item;
        let nodes:any[] = [];
        let index = 0;
        while(n.parentNode != null) {
            let selectors = getPossibleSelectors(n);
           nodes.push({
            selectors,
            index
           });
           index++;
           n = n.parentNode;
        }
        treeTrans.push(nodes);
    });
    console.log(JSON.stringify(treeTrans));
    return 
}
export {
    transformToArray,
    buildPossibleSelectors,
    generateMap
}