var elevator = {
    floors: 0,
    currentFloor: 0,
    currentPeople: 0,
    buttonUp: document.getElementsByClassName('up')[0],
    buttonDown: document.getElementsByClassName('down')[0],
    buttonAdd: document.getElementsByClassName('add')[0],
    buttonRemove: document.getElementsByClassName('remove')[0]
}
elevator.drawElevator = function (length) {
    var container = document.getElementsByClassName('elevator')[0];
    for (var i = 0; i < length; i++) {
        var floor = document.createElement('p');
        floor.classList.add('floor');
        container.appendChild(floor);
    }
    this.floors = document.getElementsByClassName('floor');
};
elevator.peopleChange = function (n) {
    this.currentPeople += n;
    this.height = this.floors.length - 1;
    if (this.currentPeople < 0) {
        this.currentPeople = 0;
        return false;
    }
    this.floors[this.height - this.currentFloor].style.backgroundColor = 'green';
    this.floors[this.height - this.currentFloor].innerText = this.currentPeople;

};
elevator.floorChange = function (n) {
    this.currentFloor += n;
    if (this.currentFloor < 0) {
        this.currentFloor = 0;
        return false;
    }
    else if (this.currentFloor > this.height) {
        this.currentFloor = this.height;
        return false;
    } else {
        if (n > 0) {
            this.floors[this.height - this.currentFloor + 1].style.backgroundColor = 'inherit';
            this.floors[this.height - this.currentFloor + 1].innerText = '';
        } else {
            this.floors[this.height - this.currentFloor - 1].style.backgroundColor = 'inherit';
            this.floors[this.height - this.currentFloor - 1].innerText = '';
        }
        this.floors[this.height - this.currentFloor].style.backgroundColor = 'green';
        this.floors[this.height - this.currentFloor].innerText = this.currentPeople;
    }
};
elevator.drawElevator(10);
elevator.buttonAdd.setAttribute('onClick', 'elevator.peopleChange(' + 1 + ')');
elevator.buttonRemove.setAttribute('onClick', 'elevator.peopleChange(' + (-1) + ')');
elevator.buttonUp.setAttribute('onClick', 'elevator.floorChange(' + 1 + ')');
elevator.buttonDown.setAttribute('onClick', 'elevator.floorChange(' + (-1) + ')');