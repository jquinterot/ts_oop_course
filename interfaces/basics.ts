(() =>{
    //Definiar peticiones http
    interface Hero {
        name:string;
        age?: number;
        powers: number[];
        getName?: () => String
    }

    class Xmen implements Hero {
        name:string;
        powers: number[];
        constructor(name:string, powers: number[]){
            this.name = name;
            this.powers = powers;
        }

        getPowers = () => {
            console.log(this.powers)
        }
    }
    const wolverine = new Xmen('Logan', [1,2])
    console.log(wolverine)

    interface addTwoNumbers {
        (a:number, b:number): number
    }

    let addTwoNumbersFunction:addTwoNumbers;

    addTwoNumbersFunction = (a:number, b:number) => {
        return a + b;
    }
}
)()