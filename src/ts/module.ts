type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation) => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) return 'Can\'t divide by 0';
      return a / b;
    default:
    return 'Operation unknown';
  }
}

export default calculator
