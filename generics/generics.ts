export function genericFunction<T> (argument: T): T{
    console.log(argument);
    return argument;
}

export const genericArrowFunction = <T> (argument:T) => argument;

genericFunction(2).toFixed(2);
genericFunction('fail').toUpperCase();
genericFunction(new Date()).getDate();