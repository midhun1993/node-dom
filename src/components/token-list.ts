export default class TokenList {
    protected tokens: string[];
    constructor(str:string){
        this.tokens = str.split(/S/)
    }
    public contains(token:string) {
        return this.tokens.indexOf(token) !== -1;
    }
}