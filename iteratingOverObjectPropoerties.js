/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(
  function() {
    var result = [];
    
    var newObj = new Object();
    newObj.prop1 = "property1";
    newObj.prop2 = "property2";
    
    function printProps(object) {
      for ( var prop in object) {
        if (object.hasOwnProperty(prop)) {
         result.push(prop);
        }
      }
      return result;
    }
  
    /**
     * Three ways of printing properties of an object
     */
    //return printProps(newObj); // way one
    //return Object.keys(newObj); // way two
    return Object.getOwnPropertyNames(newObj); // way three
  }
)();
