(()=> {
    //An abstract class can be only declared and extended but not initialized
 abstract class Mutante {
    constructor(public name:string,
        public realName:string){}
    
        usePower(){
            console.log('power used');
            
        }
 }

 class Xmen extends Mutante {
    saveTheWorld(){
        console.log('world saved')
    }
 }

 class Villian extends Mutante {
    destroyTheWorld(){
        console.log(  'world destroyed');
    }    
  
 }

 const wolverine = new Xmen('Wolverine', 'Logan');
 const magneto = new Villian('Magneto', 'Magnus');

 const printName = (character: Mutante) => {
    console.log(character.realName);
 }

 printName(wolverine);

 wolverine.saveTheWorld();
 magneto.usePower();


}) ()