import { ElementCollectionResult, ElementResult } from 'types/types'
import RuleMatcher from '../rule/matcher';
import Element from '../../components/element';

/**
 * @typedef {Element | null} ElementResult DOM style query result result
 */

/**
 * @typedef {Element[] | null} ElementResult DOM style querySelectorAll result
 */

/**
 * @module Engine
 */
class Engine {
    protected ruleProvider: any;
    protected document: any;
    protected result: any;
    protected ruleMatcher: RuleMatcher;
    constructor(
        document: any,
        rules: any
    ) {
        this.document = document;
        this.ruleProvider = rules;
        this.ruleMatcher = new RuleMatcher();
    }
    *match(node: any, rule: any): object {
        let that: any = this;
        const walk = function* (node: any): any {
            let ruleFlag = that.ruleMatcher.getRuleStatus(node, rule);
            switch (ruleFlag) {
                case 'ABORT':
                    return (null);
                    break;
                case 'MATCHED_ABORT':
                    yield node;
                    return (null);
                    // Add the recursion code
                    break;
                case 'MATCHED_CONTINUE':
                    yield node;
                    // Add the recursion code
                    break;
                case 'NOT_MATCHED_CONTINUE':
                    // Add the recursion code
                    //let nextNodeToWalk;
                    if (!node.childNodes) {
                        return (null);
                    }

                    for (let n of node.childNodes) {
                        yield* walk(n)
                    }
                    //yield * walk(nextNodeToWalk)
                    break;
                case 'NOT_VALID':
                    // Add the recursion code
                    // let nextNodeToWalk;
                    // yield * walk(nextNodeToWalk)
                    console.error("No idea why it happening");
            }
        }
        yield* walk(node);
    }
    doSearch(): void {
        this.result = [this.document.getData()];
        let { ruleSet } = this.ruleProvider;
        while (ruleSet.length > 0) {
            let result: any = []
            let instruction = ruleSet.pop();
            this.result.forEach((nodeParent: any) => {
                nodeParent?.childNodes.forEach((node: any) => {
                    let matched: any = this.match(node, instruction);
                    for (let val of matched) {
                        result.push(val);
                    }
                })
            });
            this.result = result;
        }
    }
    //Overloading method signature
    getResult(expectCollection: true): ElementCollectionResult
    getResult(expectCollection: false): ElementResult
    getResult(expectCollection = false):ElementResult | ElementCollectionResult {
        if (!this.result) {
            this.doSearch();
        }
        let result = this.result.filter((i: any) => i !== null);
        if (expectCollection && result.length == 0) {
            return [];
        }
        if (!expectCollection && result.length == 0) {
            return null;
        }
        if (expectCollection && result.length > 0) {
            let mappedRsult = result.map((i: any) => new Element(i))
            return mappedRsult;
        }
        return new Element(this.result[0]);
    }
}

export default Engine;