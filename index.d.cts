declare function parse(str: string, offset?: string | Date): Date;

//FIXME: Export default gives error:
//This expression is not callable.
//Type 'typeof import(".../date-two/index")' has no call signatures.ts(2349)
// export default parse;

//This works, but why? 🤯
export = parse;