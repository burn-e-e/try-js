function scoping(){
    if(true){
        var varVariable = "I'm a var variable.";
        let letVariable = "I'm a let variable.";
    }
    console.log(varVariable);
    console.log(letVariable);
}
scoping();