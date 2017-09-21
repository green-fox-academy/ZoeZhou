function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1) {
  Person.call(this, name, age);
  this.salary = salary;
  this.department = department;
  this.hiredAt = hiredAt;
  this.leftAt = leftAt;
  this.status = status;
  this.maxSalaryMultiplier = maxSalaryMultiplier;
}
Employee.prototype = new Person();
Employee.constructor = Employee;

Employee.prototype.getInfo = function () {
  if (this.leftAt !== null) {
    var letfMessage = ` to ${this.leftAt}`;
  }
  return `${this.name}(${this.age} works at ${this.department} for ${this.salary} usd from ${this.hiredAt}${this.leftAt ? letfMessage : ''})`;
};
Employee.prototype.quit = function (isFired) {
  try {
    if (this.status === 'active') {
      this.leftAt = new Date().toLocaleDateString();
      this.status = isFired;
    } else {
      throw new Error('already left');
    }
  }
  catch (error) {
    console.log(error);
  }
};
Employee.prototype.increaseSalaryBy = function (newSalary) {
  try {
    if (newSalary > this.salary * this.maxSalaryMultiplier) {
      throw new Error('input error');
    } else {
      this.salary = newSalary;
    }
  }
  catch (error) {
    console.log(error);
  }
};
Employee.prototype.setDepartment = function (newDepartment) {
  this.department = newDepartment;
};

function Developer(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1.05, level) {
  Employee.apply(this, arguments);
  this.level = level;
}
Developer.prototype = new Employee();
Developer.constructor = Developer;

Developer.prototype.changeLevel = function (newLevel) {
  this.level = newLevel;
}

function Director(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1.1) {
  Developer.apply(this, arguments);
}
Director.prototype = new Developer();
Director.constructor = Director;

Director.prototype.fireEmployee = function (employeeToFire) {
  try {
    if (employeeToFire instanceof Employee && employeeToFire instanceof Director === false) {
      employeeToFire.status = 'fired';
      employeeToFire.leftAt = new Date().toLocaleDateString();
    } else {
      throw new Error('he/she is not a employee or same level with you');
    }
  }
  catch (error) {
    console.log(error);
  }
};
Director.prototype.promoteDeveloper = function (developerToPromote, newLevel) {
  try {
    if (developerToPromote instanceof Developer) {
      developerToPromote.level = newLevel;
    }
    else {
      throw new Error('he/she is not a Developer')
    }
  }
  catch (error) {
    console.log(error);
  }
}

var em1 = new Employee('em1', 1, 10);
var em2 = new Developer('em2', 2, 20);
var em3 = new Director('em3', 3, 30);