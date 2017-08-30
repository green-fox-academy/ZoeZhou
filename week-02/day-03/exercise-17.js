function printer() {
    // solution-1
    // for (var i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }

    // solution-2
    var argsArray = Array.prototype.slice.call(arguments);  //turn arguments to a real array
    argsArray.forEach(function(value){
        console.log(value);
    })
}

printer(1, 2, 3, 4, 5);