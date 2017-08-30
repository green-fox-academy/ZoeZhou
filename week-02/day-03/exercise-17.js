function printer() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printer(1, 2, 3, 4, 5);