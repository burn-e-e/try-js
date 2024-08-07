function var_scoping(){
    if(true){
        var varVariable = "I'm a var variable.";
      //let letVariable = "I'm a let variable."; //! ReferenceError: letVariable is not defined
    }
    console.log(varVariable);
    console.log(letVariable);
}
var_scoping();