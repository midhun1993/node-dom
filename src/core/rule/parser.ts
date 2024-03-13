export default function(selector: string) {
    let validSelectorFragments = selector.split(/\s{1,7}/).filter((i)=> i!="");
    console.log(validSelectorFragments);
}