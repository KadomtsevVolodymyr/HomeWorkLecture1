export function basicOp(operation, a, b) {
  switch (operation) {
    case '+':
      return (a + b); 
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    case '/':
      return (a / b);
    default:
      return 0;
  }
}
