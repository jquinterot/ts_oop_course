(() => {
    class Car {
        constructor(public color:string, public brand?:string){
        }
        //To access to a get you dont need to put the () like a method it is takem as a property
        get colorAndBrand(){
            return `${this.color} ${this.brand}`
        }

         set newColor(newColor:string){
            this.color = newColor;
         }
    }

    const ferrari = new Car('red', 'ferrrari')
    console.log(ferrari);
    console.log(ferrari.colorAndBrand)
    console.log(ferrari.newColor = 'yellow');
    console.log(ferrari);
    
    
})()

