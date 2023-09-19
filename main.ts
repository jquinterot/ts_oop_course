(()=>{
const batman: string = 'Batman';
console.log(`I am ${batman}`);

let names: string[] = [];
names.push('Johany');
names.push('Valen');

const updatedNames:string[] = ['Luz', ...names];

console.log(names);
console.log(updatedNames);
console.log(names[0].toUpperCase());

let numberList: number[] = [1,2,3,4];

const multiplyPerTwo = numberList.map((x) => x * 2);
console.log(multiplyPerTwo);

enum cars{
    RED = 'red',
    BLUE = 'blue'
}

console.log(`The car is ${cars.BLUE}`);

const error = (message:string):never =>{
    throw new Error(message)
}
//error('help');
}) ()