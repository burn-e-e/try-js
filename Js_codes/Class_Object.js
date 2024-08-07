const Burnee ={
    name: "Burnee",
    born: "2004-02-13",
    age: 20,
    isMale: true,
    study(){
        console.log("Studying..");
    }
}
class Human{
    constructor(name,age,isMale){
        this.country = "Mongolia";
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    get name(){
        return this.name;
    }
    set name(val){
        this.name = val;
    }
}