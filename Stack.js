function isValidParentheses(input) {
    const stack = [];
    const openingBrackets = "([{";
    const closingBrackets = ")]";
  
    for (let char of input) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
  
        if (stack.length === 0 || stack.pop() !== correspondingOpeningBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }