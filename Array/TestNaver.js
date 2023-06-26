// Q1. Palindrome Function 
// Given a string of lowercase in the range a to z, and return true if the straing same character that reads forward and backward

function palindrome(str) {
    let revserseStr  = str.split('').reverse().join('');
    if(str === revserseStr) return true
    return false
    
  }


  
 console.log('test1',palindrome('madam')); // true
 console.log('test2', palindrome('maadm')); // false
  
  // Example1
  // input: madam
  // output: true
  // Example 2
  //  input: maadm
  // output: false

  /**
   * Event bubbling vs capturing
Browser Router
Debounce vs throttle
Null vs undefined
concurrency vs multiple-threading
DOM vs ShadowDOM
CSSOM
Batching render
node-sass vs postcss
git: Squash
git tree hell
   */