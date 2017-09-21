class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1) {
    super(...arguments);
    this.salary = salary;
    this.department = department;
    this.hiredAt = hiredAt;
    this.leftAt = leftAt;
    this.status = status;
    this.maxSalaryMultiplier = maxSalaryMultiplier;
  }
  getInfo() {
    if (this.leftAt !== null) {
      var letfMessage = ` to ${this.leftAt}`;
    }
    return `${this.name}(${this.age} works at ${this.department} for ${this.salary} usd from ${this.hiredAt}${this.leftAt ? letfMessage : ''})`;
  }
  quit(isFired) {
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
  }
  increaseSalaryBy(newSalary) {
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
  }
  setDepartment(newDepartment) {
    this.department = newDepartment;
  }
}

class Developer extends Employee {
  constructor(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1.05, level) {
    super(...arguments);
    this.level = level;
  }
  changeLevel(newLevel) {
    this.level = newLevel;
  }
}

class Director extends Developer {
  constructor(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1.1) {
    super(...arguments);
  }
  fireEmployee(employeeToFire) {
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
  }
  promoteDeveloper(developerToPromote, newLevel) {
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
}

var em1 = new Employee('em1', 1, 10);
var em2 = new Developer('em2', 2, 20);
var em3 = new Director('em3', 3, 30);