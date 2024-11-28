export default class TokenList {
    protected tokens: string[];
    constructor(str:string){
        this.tokens = str.split(/ /)
    }
    public contains(token:string) {
        return this.tokens.indexOf(token) !== -1;
    }
}