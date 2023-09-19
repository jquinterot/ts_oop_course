(() => {
    type Hero = {
        name:string,
        age?: number, 
        powers:string[],
        getName: () => string
    } 


    let flash:Hero = {
        name: 'other name',
        powers: ['other power'],
        getName(){
            console.log(this.name);
            return this.name
        }
    }
    
    let superman:Hero ={
        name: 'Clark Kent',
        powers:['Super Strenght'],getName(){
            console.log(this.name);
            return this.name
        }

    }
    

    console.log(flash.getName());
    console.log(superman.getName());
})()