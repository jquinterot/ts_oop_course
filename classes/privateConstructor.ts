(()=>{
    class Apocalipsis{
        //This is mostly used for singlenton to have only one instance and then all call the same instance
        static instance:Apocalipsis;
        private constructor(public name:string){

        }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy Apoca el unico');
            }
            
            return Apocalipsis.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();

    console.log(apocalipsis);
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    
})()