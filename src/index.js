module.exports = function reverse (n) {
        let numToString = n.toString();
        let reversedString = '';
        let result = '';
        
        for (var i = 0; i < numToString.length; i += 1) {
          if (numToString.slice(-1) === '0') {
            reversedString = `${numToString[i]}${reversedString}`;
            result = reversedString.slice(1);
          } else if (numToString.slice(0, 1) === '-') {
            reversedString = `${numToString[i]}${reversedString}`;
            result = reversedString.slice(0, -1);
          } else {
            result = `${numToString[i]}${result}`;
          }
        }
        return result;     
}
