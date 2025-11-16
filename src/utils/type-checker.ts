const checkNull = (input: unknown): input is null => input === null;
const checkUndefined = (input: unknown): input is undefined => input === undefined;
const checkTruthy = (input: unknown) => !!input;
const checkFalsy = (input: unknown) => !input;

export { checkNull, checkUndefined, checkTruthy, checkFalsy };
