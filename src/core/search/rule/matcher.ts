import RuleChecker from './checker';
class RuleMatcher {
    public getRuleStatus(node:any, rule:any): string{
        let { type , match} = rule;
        let ruleMatched = RuleChecker[type](node, match);
        let isStrictPolicy = rule['policy'] === 'STRICT' ? true : false;
        let isSingleScope = rule['scope'] == 'SINGLE' ? true : false;
        if(ruleMatched === true) {
            if(isSingleScope === true) {
                return 'MATCHED_ABORT';
            } else {
                return 'MATCHED_CONTINUE';
            }
        }
        if(ruleMatched === false) {
            if(isStrictPolicy === true) {
                return 'ABORT';
            } else {
                return 'NOT_MATCHED_CONTINUE';
            }
        }
        return 'NOT_VALID';
    }
}

export default RuleMatcher;