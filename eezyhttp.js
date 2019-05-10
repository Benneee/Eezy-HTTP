// es5 OOP
// Using Prototypes

function eezyHTTP() {
  // One property and it is set to the XHR object
  this.http = new XMLHttpRequest();
}

// GET Request
eezyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  // this.http.onload = () => {
  this.http.onload = function() {
    // 'this' usually refers to the object in its proximity
    // hence, this.http.status is undefined at this point.
    // the es6 arrow function would have fixed this but we want to stick to es5

    // so we fixed the undefined error by creating a variable outside this if statement
    // simply to capture the particular 'this' object we are referring to within the if statement, ergo

    // if (this.http.status === 200) {
    //   console.log(this.http.responseText);
    // }

    // Now, we use a callback to return the data would eliminate the risk of undefined due to the time lag for checking if status === 200

    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ', self.http.status);
    }
  };

  this.http.send();
};

// POST Request

eezyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT Request

eezyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DELETE Request
eezyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // response will be an empty object
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ', self.http.status);
    }
  };

  this.http.send();
};
