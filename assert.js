
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      document.getElementById('test').innerHTML += ("<font color=\"green\">Test passed!" + assertionToCheck + " is true<\/font></br>")
    }
  },
  isSame: function(item, item2) {
    if (item !== item2) {
      throw new Error("THAT IS NOT THE SAME!!!");
    } else {
      return true;
    }
  },
  includesValue: function(obj, message) {
    if (Object.values(obj).indexOf(message) > -1) {
      document.getElementById('test').innerHTML += ("<font color=\"green\">Test passed! Given Object contains value of " + message +"<\/font></br>")
      // document.write("%c Test passed! Given Object contains value of " + message, "color:green");
    } else  {
      document.getElementById('test').innerHTML += ("<font color=\"red\">Finder fail, given Object doesn't contain value of " + message  +"<\/font></br>")
      // throw new Error("%c Finder fail, given Object doesn't contain value of " + message, "color: purple" );
    }
  },
  includesKey: function(obj, message) {
    if (Object.keys(obj).indexOf(message) > -1) {
      document.getElementById('test').innerHTML += ("<font color=\"green\">Test passed! Given Object contains key of " + message +"<\/font></br>")
      // document.write("%c Test passed! Given Object contains " + message, "color:green");
    } else  {
      document.getElementById('test').innerHTML += ("<font color=\"red\">Finder fail, given Object doesn't contain key of " + message  +"<\/font></br>")
      // throw new Error("Finder fail, given Object doesn't contain key of " + message );
    }
  },
  isEmpty: function(item) {
    if (item.length === 0) {
      document.getElementById('test').innerHTML += ("<font color=\"green\">Test passed!" + item + " is empty<\/font></br>")
    } else {
      document.getElementById('test').innerHTML += ("<font color=\"red\">Test fail! " + item + " is NOT empty<\/font></br>")
    }
  },
  isArray: function(item) {
    if (Array.isArray(item)) {
      document.getElementById('test').innerHTML += ("<font color=\"green\">Test passed!" + item + " is an Array<\/font></br>")
    } else  {
      document.getElementById('test').innerHTML += ("<font color=\"red\">Test fail! " + item + " is NOT an Array<\/font></br>")
    }
  }
};
