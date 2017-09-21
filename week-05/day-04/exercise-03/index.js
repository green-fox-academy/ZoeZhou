
class MyPromise {
  constructor(checkCallback) {
    this.successMessage = undefined;
    this.errorMessage = undefined;
    checkCallback(
      function(message){
        this.fakeResolve(message)
      }.bind(this),
      function(message){this.successMessage = message}.bind(this)
    )
  }
  fakeResolve(message) {
    this.successMessage = message;
  }
  resolve(message) {
    this.successMessage = message;
  }
  reject(message) {
    this.errorMessage = message;
  }
  then(callback) {
    if (this.successMessage !== undefined) {
      callback(this.successMessage);
    }
    else {
      this.fakeResolve = callback;
    }
    return this;
  }
  catch(callback) {
    if(this.errorMessage !== undefined) {
      callback(this.errorMessage);
    }
    return this;
  }
}

let myFirstPromise = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success..."); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then(successMessage => console.log("Yay! " + successMessage))
  .catch(errorMessage => console.log("oppos ... " + errorMessage));