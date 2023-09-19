(() => {
    class Avengers {
        constructor(public name:string,
            public realName:string){
            console.log('Avenger constructor called')
        }

        //This is similar to private but it can be accessed from the son class but private can not
        protected getFullName():string{
            //this one can be accessed from son class but not outside
            return `${this.name} ${this.realName}`
        }

        private getFullPrivateName():string{
            //This one can not be called from son class
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avengers {
        constructor(
            name:string, 
            realName:string,
            public isMutant:boolean){
                //Super must be called as soon as possible in the son constructor
            super(name, realName)
            console.log('Xmen constructor called');
            
        }

        public getFullNameFromXmen(): string {
            console.log(super.getFullName())
            return super.getFullName()
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    wolverine.getFullNameFromXmen()
})()