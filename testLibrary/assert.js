var assert = {

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error(assertionToCheck + "is not true");
    }
  },

  isEqual: function(assertionToCheck, matcher) {
    if(assertionToCheck !== matcher) {
      throw new Error(assertionToCheck + " and " + matcher + "are not the same!");
    }
  },

  isArrayEqual: function(assertionToCheck, matcher) {
    for (var i = 0; i < assertionToCheck].length; i++) {
      if(assertionToCheck[i] !== matcher[i]) {
        throw new Error (assertionToCheck + " and " + matcher + "are identical arrays!")
      }
    }
  }
};

function unitTest(test) {
  var success = true;
  try {
    test();
    document.write(testAction);
    document.write("<br>");
  }
  catch(error) {
    success = false;
    document.write(testAction);
    document.write("<br>");
    document.write(error);
    document.write("<br><br>")
  }
  if (success) {
    document.write('no error');
    document.write('<br><br>')
  }
}
